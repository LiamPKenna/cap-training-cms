import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const StyledListItem = styled.li`
  margin: 1rem 3rem 0.5rem;
`;

const TitleText = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin: 2rem 0;
`;

const SecondaryText = styled(Typography)`
  color: darkgrey;
`;

const SecondaryDiv = styled.div`
  text-align: right;
  width: 100%;
`;

const AdminDashboard = props => {
  const { allUsers } = props;
  const [expanded, setExpanded] = useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const makeCompletedLessons = completedLessons => {
    return completedLessons
      ? Object.keys(completedLessons)
          .filter(l => l !== 'default')
          .map((l, i) => (
            <StyledListItem key={i}>{props.lessons[l].title}</StyledListItem>
          ))
      : '';
  };

  const makeUser = (user, index) => {
    return (
      <ExpansionPanel
        expanded={expanded === `panel${index}`}
        onChange={handleChange(`panel${index}`)}
        key={index}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}`}
          id={`panel${index}`}
        >
          <Typography>{user.email}</Typography>
          <SecondaryDiv>
            <SecondaryText>Completed Lessons</SecondaryText>
          </SecondaryDiv>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul>{makeCompletedLessons(user.completedLessons)}</ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  };

  return (
    <div>
      <TitleText>Admin Dashboard</TitleText>
      {allUsers
        ? Object.keys(allUsers).map((u, i) => makeUser(allUsers[u], i) || u)
        : ''}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    allUsers: state.users.allUsers,
    lessons: state.lessons,
  };
};

export default connect(mapStateToProps)(AdminDashboard);
