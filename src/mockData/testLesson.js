const testLesson = [
  [
    {
      type: "title",
      content: "This is a title",
      format: {
        align: "center"
      }
    },
    {
      type: "heading",
      content: "This is a heading",
      format: {
        align: "left"
      }
    },
    {
      type: "subHeading",
      content: "This is a sub heading",
      format: {
        align: "left"
      }
    },
    {
      type: "text",
      content: "This is normal text",
      format: {
        align: "left"
      }
    },
    {
      type: 'code',
      content: `const codeStyle = (text) => {
  return "good style";
}`,
      format: {
        align: "left"
      }
    },
    {
      type: "text",
      content: "This is normal text talking about code",
      format: {
        align: "left"
      }
    },
    {
      type: 'break'
    },
    {
      type: "heading",
      content: "This is another heading",
      format: {
        align: "left"
      }
    },
    {
      type: "text",
      content: "This is more normal text",
      format: {
        align: "left"
      }
    },
  ]
];

export default testLesson;