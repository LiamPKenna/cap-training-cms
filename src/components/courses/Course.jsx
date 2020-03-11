import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading from '../utilities/Loading';
import CheckMark from '../utilities/CheckMark';
import BackLink from '../utilities/BackLink';
import { addSegment, newLesson } from '../../actions';
import NewItemButton from './NewItemButton';
import NewItemInput from './NewItemInput';
import {
  PageWrapDiv,
  NewItemDiv,
  StyledListItem,
  CourseTitleHeader,
} from './StyledCourseComponents';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

  const makeLessons = lessons => {
    if (lessons && Object.keys(lessons).length > 1) {
      return lessons
        .filter(l => l.title !== 'default')
        .map(lesson => (
          <StyledListItem key={lesson.lessonId}>
            <Link to={`/lessons/${lesson.lessonId}`}>{lesson.title}</Link>
            {props.completedLessons &&
            props.completedLessons[lesson.lessonId] ? (
              <CheckMark />
            ) : (
              ''
            )}
          </StyledListItem>
        ));
    } else {
      return <StyledListItem>No lessons yet</StyledListItem>;
    }
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
              <Typography>{segments[segmentId].title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <ul>{makeLessons(segments[segmentId].lessons)}</ul>
            </ExpansionPanelDetails>
            {props.admin ? (
              <NewItemDiv>
                {!showLessonForm || segmentFocus !== segmentId ? (
                  <NewItemButton
                    text="NEW LESSON"
                    clickHandler={() => showThisSegmentLessonInput(segmentId)}
                    title="New Lesson"
                  />
                ) : (
                  ''
                )}
                {showLessonForm && segmentFocus === segmentId ? (
                  <NewItemInput
                    value={newLessonText}
                    handleChange={e => setNewLessonText(e.target.value)}
                    handleSubmit={() =>
                      handleNewLesson(segmentId, segments[segmentId].lessons)
                    }
                    inputName="Lesson Name"
                    handleCancel={cancelLessonInput}
                  />
                ) : (
                  ''
                )}
              </NewItemDiv>
            ) : (
              ''
            )}
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
          {props.admin ? (
            <NewItemDiv>
              {!showSegmentForm ? (
                <NewItemButton
                  text="NEW SEGMENT"
                  clickHandler={() => setShowSegmentForm(true)}
                  title="New Segment"
                />
              ) : (
                ''
              )}
              {showSegmentForm ? (
                <NewItemInput
                  value={newSegmentText}
                  handleChange={e => setNewSegmentText(e.target.value)}
                  handleSubmit={handleNewSegment}
                  inputName="Segment Name"
                  handleCancel={cancelSegmentInput}
                />
              ) : (
                ''
              )}
            </NewItemDiv>
          ) : (
            ''
          )}
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
