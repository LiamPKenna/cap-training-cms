import testLesson from './testLesson';

const mockCourses = {
  1: {
    title: "Intro to programming",
    segments: {
      1: {
        title: 'Mock Segment',
        lessons: { 1: { title: "This Lesson", content: testLesson } }
      }
    }
  }
}

export default mockCourses;