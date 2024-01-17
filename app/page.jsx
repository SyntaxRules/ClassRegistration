'use client';

import {
  Grid, Paper, Container, Checkbox, Title, Button, Divider,
} from '@mantine/core';
import { useState } from 'react';

const data = {
  timesLookup: {
    firstPeriod: 'First Period',
    secondPeriod: 'Second Period',
    thirdPeriod: 'Third Period',
    fourthPeriod: 'Fourth Period',
  },
  times: {
    firstPeriod: '9:50-10:50',
    secondPeriod: '11:00-12:00',
    thirdPeriod: '12:50-1:50',
    fourthPeriod: '2:00-3:00',
  },
  classes: {
    firstPeriod: [
      { name: 'Little Learners', ageRange: '0-3' },
      { name: 'Backyard Birds of NC', ageRange: 'Pre-K' },
      { name: 'Stories + Clay', ageRange: 'Pre-K' },
      { name: 'Spanish', ageRange: 'LE' },
      { name: 'Lit + Ntbk: Scientific Pioneers', ageRange: 'LE' },
      { name: 'Multicultural Arts', ageRange: 'LE + UE' },
      { name: 'Poetry Appreciation', ageRange: '7+' },
      { name: 'American Sign Langauge', ageRange: 'UE' },
      { name: 'Hist + Anatomy of a Horse', ageRange: 'UE' },
      { name: 'Geography + Ecology', ageRange: 'Middle' },
    ],
    secondPeriod: [
      { name: 'Little Learners', ageRange: '0-3' },
      { name: 'Seasonal Storytime', ageRange: 'Pre-K' },
      { name: 'Music, Movement, Games', ageRange: 'Pre-K' },
      { name: 'Theater', ageRange: '6+' },
      { name: 'Sea + Shore', ageRange: 'LE' },
      { name: 'Elem Geography', ageRange: '7-10' },
      { name: 'Firepit Cooking', ageRange: '8+' },
      { name: 'Backyard Scientist', ageRange: '8-10' },
      { name: 'Hand Knitting', ageRange: '10+' },
      { name: 'Intro to Logical Fallacies', ageRange: '11+' },
    ],
    thirdPeriod: [
      { name: 'Little Learners', ageRange: '0-3' },
      { name: 'P.E. Ready, Set, Play!', ageRange: 'Pre-K' },
      { name: 'First Nations', ageRange: 'LE' },
      { name: 'Spool KLnitting', ageRange: 'LE' },
      { name: 'Folklore', ageRange: '8-10' },
      { name: 'Art Projects', ageRange: 'UE' },
      { name: 'Spanish', ageRange: 'UE + Middle' },
      { name: 'Creative Writing Stories', ageRange: '10+' },
      { name: 'Yearbook + Graphic Arts', ageRange: '11+' },
    ],
    fourthPeriod: [
      { name: 'Stories with Shakespeare', ageRange: 'LE' },
      { name: 'Baking Basics', ageRange: '7+' },
      { name: 'Tinker Challenge', ageRange: 'LE + UE' },
      { name: 'First Nation', ageRange: 'UE + Middle' },
      { name: 'Creative Writing + Refl.', ageRange: 'Middle' },
    ],
  },

};

const Home = () => {
  const [selections, setSelections] = useState({
    firstPeriod: '',
    secondPeriod: '',
    thirdPeriod: '',
    fourthPeriod: '',
  });
  return (
    <Container
      mt="84px"
    >
      <Grid
        justify="center"
      >
        {
            Object.keys(data.classes).map((key) => (
              <Grid.Col
                key={key}
                span={{ base: 12, md: 6 }}
              >
                <Paper
                  p="md"
                  shadow="md"
                  withBorder
                >
                  <Title
                    order={2}
                  >
                    {`${data.timesLookup[key]}, ${data.times[key]}` }
                  </Title>

                  {data.classes[key].map((value) => (
                    <Checkbox
                      key={`${key}_${value}`}
                      checked={selections[key] === value.name}
                      // color="#523f91"
                      // disabled={!newPlayer.viewedWaiver}
                      label={`${value.name} || ${value.ageRange}`}
                      mb="sm"
                      onChange={() => setSelections({
                        ...selections,
                        [key]: value.name,
                      })}
                    />
                  ))}
                </Paper>
              </Grid.Col>
            ))

          }
        <Grid.Col
          span={{ base: 12, md: 8 }}
        >
          <Paper
            p="md"
            shadow="md"
            withBorder
          >
            <Title
              order={2}
            >
              My Selections
            </Title>

            {Object.keys(selections).map((key, index) => (
              <>
                <Title key={key} order={3}>{`${data.timesLookup[key]}: ${selections[key]}`}</Title>
                {index < Object.keys(selections).length - 1 ? (
                  <Divider my="sm" />
                ) : null}
              </>

            ))}

            <Button
              fullWidth
              mt="lg"
              size="lg"
            >
              REGISTER
            </Button>

          </Paper>
        </Grid.Col>

      </Grid>
    </Container>

  );
};
export default Home;
