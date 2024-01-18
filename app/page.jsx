'use client';

import {
  Grid, Paper, Container, Checkbox, Title, Button, Divider, Group,
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
      { name: 'Spool Knitting', ageRange: 'LE' },
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
const ageGroups = Array.from(
  new Set(
    Object.keys(data.classes)
      .map((key) => data.classes[key])
      .flat()
      .map((x) => x.ageRange),
  ),
);

const Home = () => {
  const [selections, setSelections] = useState({
    firstPeriod: '',
    secondPeriod: '',
    thirdPeriod: '',
    fourthPeriod: '',
  });
  const [filters, setFilters] = useState([]);

  return (
    <Container
      mt="84px"
      pb="100px"
    >
      <Grid
        justify="center"
      >
        <Grid.Col
          span={{ base: 12 }}
        >
          <Paper
            p="md"
            shadow="md"
            withBorder
          >
            <Grid>
              <Grid.Col
                span={{ base: 12 }}
                style={{ textAlign: 'center' }}
              >
                <Title
                  order={2}
                >
                  AGE FILTERS
                </Title>
              </Grid.Col>
              {ageGroups.map((ag) => (
                <Grid.Col
                  key={`${ag}`}
                  span={{ base: 12, md: 2 }}
                >
                  <Checkbox
                    checked={filters.includes(ag)}
                    label={ag}
                    mb="sm"
                    onChange={() => {
                      if (filters.includes(ag)) {
                        setFilters(filters.filter((f) => f !== ag));
                      } else {
                        setFilters([...filters, ag]);
                      }
                    }}
                  />
                </Grid.Col>
              ))}
            </Grid>
          </Paper>

        </Grid.Col>
        {Object.keys(data.classes).map((key) => (
          <Grid.Col
            key={key}
            span={{ base: 12, md: 6 }}
            style={{ textAlign: 'center' }}
          >
            <Paper
              p="md"
              shadow="md"
              withBorder
            >
              <Title
                mb="md"
                order={2}
              >
                {`${data.timesLookup[key]}, ${data.times[key]}` }
              </Title>

              {data.classes[key].map((value) => (
                <div key={`${key}_${value.name}`}>
                  {filters.length === 0 || filters.includes(value.ageRange) ? (
                    <Checkbox
                      checked={selections[key] === value.name}
                      label={`${value.name} || ${value.ageRange}`}
                      mb="sm"
                      onChange={() => {
                        if (selections[key] === value.name) {
                          setSelections({ ...selections, [key]: '' });
                        } else {
                          setSelections({
                            ...selections,
                            [key]: value.name,
                          });
                        }
                      }}
                    />
                  ) : null}
                </div>
              ))}
            </Paper>
          </Grid.Col>
        ))}
        <Grid.Col
          span={{ base: 12, md: 8 }}
        >
          <Paper
            p="md"
            shadow="md"
            withBorder
          >
            <Title
              mb="md"
              order={2}
              style={{ textAlign: 'center' }}
            >
              My Selections
            </Title>

            {Object.keys(selections).map((key, index) => (
              <div key={Math.random()}>
                <Group
                  grow
                  justify="space-between"
                >
                  <span>{data.timesLookup[key]}</span>
                  <span>{selections[key]}</span>
                </Group>
                {index < Object.keys(selections).length - 1 ? (
                  <Divider my="sm" />
                ) : null}
              </div>

            ))}

            <Button
              fullWidth
              mt="lg"
              onClick={() => alert('TODO')}
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
