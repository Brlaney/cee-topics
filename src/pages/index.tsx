import React from 'react'
import { Button, Container, Grid, Header, Segment } from 'semantic-ui-react'
import styles from '@/styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <Container className={styles.container}>
        <Header content='Civil Engineering Topics' className={styles.header} />
        <Grid className={styles.grid} columns={3} doubling>
          <Grid.Column>
            <Segment>Content 1</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content 2</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content 3</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content 4</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content 5</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content 6</Segment>
          </Grid.Column>
        </Grid>
      </Container>
    </>
  )
}
