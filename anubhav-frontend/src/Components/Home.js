import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import ChallengesFeaturedPost from './ChallengesFeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ServiceCall from '../Service/ServiceCall';
import Snowfall from 'react-snowfall';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Anubhav Employee Wall',
  description:
    "You're braver than you believe, and stronger than you seem, and smarter than you think :)",
    image: 'https://source.unsplash.com/720x600/?smile',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Anshu Singh',
    date: 'Nov 12',
    description:
      'Applied for Yoga Pose Challenge under Mental Wellness Category',
      image: 'https://source.unsplash.com/720x600/?smile',
    imageText: 'Image Text',
  },
  {
    title: 'Bhavya Meghnani',
    date: 'Nov 11',
    description:
      'Submission on Green Earth Clean your park near-by Challenge',
      image: 'https://source.unsplash.com/720x600/?smile',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'About',
  description:
    'Anubhav is a tool for people to experience positivity which promotes and aid mental health and well being by providing people with tracks & challenges to perform & compete. It allows people of various organisations to perform & experience activities related to - Health Wellness (Yoga & Exercise), Mental Wellness, Green Initiatives, Arts & Culture & Community Collaborations with analytics dashboard.',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon  },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Home() {

  const [challenges, setChallenges] = React.useState();
  const [showChallenges, setShowChallenges] = React.useState(false);

  useEffect(() => {
    ServiceCall.fetchChallengesEnrolled().then((response)=>{
      setChallenges(response.data);
      setShowChallenges(true);
      })
  }, []);


  const classes = useStyles();

  return (
    <React.Fragment>
      <Snowfall />

      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Anubhav - Experience Positivity" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}


          {showChallenges && <Grid container spacing={4}>
            {challenges.map((post) => (
              <ChallengesFeaturedPost key={post.title} post={post} />
            ))}
          </Grid>}

          
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
            //   archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="" description="Something here to give world a purpose!" />
    </React.Fragment>
  );
}