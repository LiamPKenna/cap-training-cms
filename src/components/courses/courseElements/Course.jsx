import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../../utilities/Loading';
import BackLink from '../../utilities/BackLink';
import { addSegment, newLesson } from '../../../actions';
import NewSegmentInputs from './NewSegmentInputs';
import {
  PageWrapDiv,
  StyledListItem,
  CourseTitleHeader,
  SecondaryDiv,
  SecondaryText,
  ExpansionSummaryDiv,
} from '../StyledCourseComponents';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LessonListItems from './LessonListItems';
import NewLessonListItem from './NewLessonListItem';

const Course = props => {
  const { courseId } = useParams();
  const course = props.courses[courseId];
  const [showSegmentForm, setShowSegmentForm] = useState(false);
  const [newSegmentText, setNewSegmentText] = useState('');
  const [showLessonForm, setShowLessonForm] = useState(false);
  const [newLessonText, setNewLessonText] = useState('');
  const [segmentFocus, setSegmentFocus] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const showThisSegmentLessonInput = segmentId => {
    setSegmentFocus(segmentId);
    setShowLessonForm(true);
  };

  const makeSegments = segments => {
    if (segments && Object.keys(segments).length > 1) {
      return Object.keys(segments)
        .filter(segmentId => segmentId !== 'default')
        .map(segmentId => (
          <ExpansionPanel
            expanded={expanded === `panel${segmentId}`}
            onChange={handleChange(`panel${segmentId}`)}
            key={segmentId}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${segmentId}`}
              id={`panel${segmentId}`}
            >
              <ExpansionSummaryDiv>
                <Typography>{segments[segmentId].title}</Typography>
                <SecondaryDiv>
                  <SecondaryText>Lessons</SecondaryText>
                </SecondaryDiv>
              </ExpansionSummaryDiv>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ul>
                <LessonListItems
                  lessons={segments[segmentId].lessons}
                  completedLessons={props.completedLessons}
                />
              </ul>
            </ExpansionPanelDetails>
            <NewLessonListItem
              admin={props.admin}
              showLessonForm={showLessonForm}
              segmentFocus={segmentFocus}
              segmentId={segmentId}
              showThisSegmentLessonInput={showThisSegmentLessonInput}
              newLessonText={newLessonText}
              setNewLessonText={setNewLessonText}
              handleNewLesson={handleNewLesson}
              segments={segments}
              cancelLessonInput={cancelLessonInput}
            />
          </ExpansionPanel>
        ));
    } else {
      return <StyledListItem>No segments yet</StyledListItem>;
    }
  };

  const handleNewSegment = async () => {
    setShowSegmentForm(false);
    const action = await addSegment(newSegmentText, courseId);
    setNewSegmentText('');
    props.dispatch(action);
  };

  const handleNewLesson = async (segmentId, oldLessons) => {
    setSegmentFocus(null);
    const lessonAction = await newLesson(
      newLessonText,
      courseId,
      segmentId,
      oldLessons
    );
    props.dispatch(lessonAction[1]);
    props.dispatch(lessonAction[0]);
    setNewLessonText('');
  };

  const cancelSegmentInput = () => {
    setShowSegmentForm(false);
    setNewSegmentText('');
  };

  const cancelLessonInput = () => {
    setShowLessonForm(false);
    setNewLessonText('');
    setSegmentFocus(null);
  };

  if (!course) {
    return <Loading />;
  } else {
    return (
      <PageWrapDiv>
        <CourseTitleHeader>{course.title}</CourseTitleHeader>
        <div>
          <ul>{makeSegments(course.segments)}</ul>
          <NewSegmentInputs
            showSegmentForm={showSegmentForm}
            newSegmentText={newSegmentText}
            handleNewSegment={handleNewSegment}
            cancelSegmentInput={cancelSegmentInput}
            setNewSegmentText={setNewSegmentText}
            setShowSegmentForm={setShowSegmentForm}
            admin={props.admin}
          />
        </div>
        <Link to="/courses">
          <BackLink text="Back to Courses" />
        </Link>
      </PageWrapDiv>
    );
  }
};

const mapPropsToState = state => {
  return {
    courses: state.courses,
    admin: state.users.admin,
    completedLessons: state.users.completedLessons,
  };
};

export default connect(mapPropsToState)(Course);
