const mockLessons = {
  1: {
    title: 'This Lesson',
    courseId: 1,
    segmentId: 1,
    content: [
      {
        type: 'title',
        content: 'This is a title',
        format: {
          align: 'center'
        }
      },
      {
        type: 'heading',
        content: 'This is a heading',
        format: {
          align: 'left'
        }
      },
      {
        type: 'subHeading',
        content: 'This is a sub heading',
        format: {
          align: 'left'
        }
      },
      {
        type: 'text',
        content: 'This is normal text',
        format: {
          align: 'left'
        }
      },
      {
        type: 'code',
        content: `const codeStyle = (text) => {
return "good style";
}`,
        format: {
          align: 'left'
        }
      },
      {
        type: 'text',
        content: 'This is normal text talking about code',
        format: {
          align: 'left'
        }
      },
      {
        type: 'break'
      },
      {
        type: 'heading',
        content: 'This is another heading',
        format: {
          align: 'left'
        }
      },
      {
        type: 'text',
        content: 'This is more normal text',
        format: {
          align: 'left'
        }
      },
      {
        type: 'picture',
        mode: 1,
        pictures: [{
          alt: 'test image',
          src: 'https://www.dropbox.com/s/irxfwuda1fs9t84/github-account-signup.png?raw=1'
        }]
      },
      {
        type: 'picture',
        mode: 2,
        pictures: [
          {
            alt: 'test image2',
            src: 'http://dl.dropboxusercontent.com/s/lkuljqmmu8bjw9o/create-new-repo.png'
          }, {
            alt: 'test image2',
            src: 'https://www.dropbox.com/s/4d0djqw36lrga11/bank-assignment-wireframe.png?raw=1'
          },
          {
            alt: 'test image2',
            src: 'http://dl.dropboxusercontent.com/s/lkuljqmmu8bjw9o/create-new-repo.png'
          }, {
            alt: 'test image2',
            src: 'https://www.dropbox.com/s/4d0djqw36lrga11/bank-assignment-wireframe.png?raw=1'
          }
        ]
      }
    ]
  }
};

export default mockLessons;