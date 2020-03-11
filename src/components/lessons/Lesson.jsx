import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../utilities/Loading';
import BackLink from '../utilities/BackLink';
import NewElementSelector from './NewElementSelector';
import { Link } from 'react-router-dom';
import {
  createElement,
  addVideo,
  addPicture,
  lessonCompleted,
} from '../../actions';
import VideoBlock from './videoElements/VideoBlock';
import MainLessonTitle from './elements/MainLessonTitle';
import LessonElement from './LessonElement';
import Button from '@material-ui/core/Button';
import LessonCompleted from './elements/LessonCompleted';

const Lesson = props => {
  const { lessonId } = useParams();
  const lesson = props.lessons[lessonId];

  const addNewElement = newElementType => {
    if (newElementType === 'video') {
      props.dispatch(addVideo(lesson.lessonId));
    } else if (newElementType === 'picture') {
      props.dispatch(
        addPicture({ lessonId: lesson.lessonId, allContent: lesson.content })
      );
    } else {
      props.dispatch(
        createElement(newElementType, lesson.content, lesson.lessonId)
      );
    }
  };

  const markComplete = () => {
    console.log(props.users);

    props.dispatch(
      lessonCompleted({ lessonId, currentUser: props.currentUser })
    );
  };

  const makePage = (fullLessonContent, lessonId) => {
    return fullLessonContent.map((e, i) => (
      <LessonElement
        key={i}
        elementIndex={i}
        lessonId={lessonId}
        fullLessonContent={fullLessonContent}
        element={e}
        admin={props.admin}
      />
    ));
  };
  return lesson ? (
    <div>
      {props.completedLessons && props.completedLessons[lessonId] ? (
        <LessonCompleted />
      ) : (
        ''
      )}
      <MainLessonTitle title={lesson.title} />
      {lesson.video ? (
        <VideoBlock
          src={lesson.video.src}
          title={lesson.video.title}
          lessonId={lesson.lessonId}
          admin={props.admin}
        />
      ) : (
        ''
      )}
      {makePage(lesson.content, lessonId)}
      {props.admin ? (
        <NewElementSelector handleNewElement={addNewElement} />
      ) : (
        ''
      )}
      {props.completedLessons && props.completedLessons[lessonId] ? (
        ''
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={markComplete}
          >
            Mark Complete
          </Button>
          <br />
        </>
      )}
      <Link to={'/courses/' + lesson.courseId}>
        <BackLink text="Back to Course" />
      </Link>
    </div>
  ) : (
    <Loading />
  );
};

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    admin: state.users.admin,
    currentUser: state.users.currentUser,
    completedLessons: state.users.completedLessons,
  };
};

export default connect(mapStateToProps)(Lesson);
