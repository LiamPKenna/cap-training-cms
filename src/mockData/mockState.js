import testLesson from './testLesson';

const mockState = {
  brand: "Epicodus",
  logo: "https://static1.squarespace.com/static/5524448ee4b0d6f6b83ab9e2/t/57cf3de246c3c4d2933aa57c/1529949737992/?format=1500w",
  courses: {
    1: {
      title: "Intro to programming",
      segments: {
        1: {
          title: 'Mock Segment',
          lessons: {
            1: testLesson
          }
        }
      }
    }
  }
}

export default mockState;