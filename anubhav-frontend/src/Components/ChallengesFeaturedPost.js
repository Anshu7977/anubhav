import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function ChallengesFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      {/* <CardActionArea component="a" href="#"> */}
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.user_name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Challenge Applied on: {post.start_date}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Deadline: {post.deadline}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Submission Status: {post.submission_status}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.challenge_title}
              </Typography>
              {/* <Typography variant="subtitle1" color="primary">
                <Link href={post.url} >
                      Try this Now
                  </Link>
              </Typography> */}
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/720x600/?smile" title={post.imageTitle} />
          </Hidden>
        </Card>
      {/* </CardActionArea> */}
    </Grid>
  );
}

ChallengesFeaturedPost.propTypes = {
  post: PropTypes.object,
};