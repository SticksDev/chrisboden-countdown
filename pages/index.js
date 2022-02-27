import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Collapse, Text, Spacer, Link, Divider, Grid, Card } from '@nextui-org/react';
import CurrencyFormat from 'react-currency-format';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css' 

export default function Home() {
  let donateGoalMonthly = 1000;
  let currentMonthlyDonations = 1018;
  let totalRaised = 0;
  let patreonTtl = 1018;
  let lastUpdatedOn = new Date("2022-02-27T02:14:32.860Z");
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Boden - Countdown Page</title>
        <meta name="description" content="This is the page to see all info about chris's status while in custody." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text h1>
          -- Years, -- Months, -- Days, -- Hours, -- Minutes, -- Seconds remaining.
        </Text>

        <Text p1 size={25} dangerouslySetInnerHTML={{
          __html: `
          Current Status: Waiting for location. | Estimated Completion: In about <strong>4</strong> weeks.`
        }}>
        </Text>
        <Spacer /> <Spacer />
        <Text h2 size={35}> Donation goals </Text>
        <Text h4> Please don&apos;t feel obliged to donate; but if you can, check the links below (every little bit helps!) </Text>
        <Grid.Container gap={4} justify="center" >
          <Grid xs={4}>
            <Card color={"gradient"} hoverable>
              <Card.Header>
                Monthly Donation Goal
              </Card.Header>
              <Card.Body css={{display: "block"}}>
                This goal is <strong>{Math.floor((100 * currentMonthlyDonations) / donateGoalMonthly)}</strong> percent complete.
                <br></br> With a total of <strong><CurrencyFormat value={currentMonthlyDonations} displayType={'text'} thousandSeparator={true} prefix={"$"}/></strong> USD this month. <br></br>
                With a total of <strong><CurrencyFormat value={patreonTtl} displayType={'text'} thousandSeparator={true} prefix={"$"}/></strong> from patreon (You guys rock!).
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card color={"gradient"} hoverable>
              <Card.Header>
                Total Donations So Far
              </Card.Header>
              <Card.Body css={{display: "block"}}>
                We have raised <strong><CurrencyFormat value={totalRaised} displayType={'text'} thousandSeparator={true} prefix={"$"}/></strong> with one time donations so far. <br></br>
                With a total of <strong><CurrencyFormat value={patreonTtl} displayType={'text'} thousandSeparator={true} prefix={"$"}/></strong> from patreon (You guys rock!)
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
        <Spacer /> <Spacer />        
        <Collapse.Group>
          <Collapse title="Can I send chris stuff?">
            <Text p1 size={20}>
              You can! Be careful though, this is <strong>*federal*</strong> prison, so they <strong>don&apos;t joke around</strong> and <strong>don&apos;t understand your humor</strong> and or intentions.
              <br></br><br></br>Ask mouse before sending something.
            </Text>
          </Collapse>
          <Collapse title="How can I help?">
            <Text p1 size={20}>
              You can help in a few ways:
              <li> Donate via <Link href="#" icon block>paypal</Link></li>
              <li> Donate via <Link href="https://www.patreon.com/ChrisBoden" icon block>patreon</Link></li>
              <li> Send chris stuff (see first point) </li>
              <li> Send a letter to: (address pending) </li>
              <li> Send an email (that will be sent as a letter). Email: TBD </li>
            </Text>
          </Collapse>
          <Collapse title="When will chris go in/out?">
            <Text p1 size={20}>
              We don&apos;t know when chris will go in (they are finding a place), he hopes to be out by march of 2024.
            </Text>
          </Collapse>
        </Collapse.Group>
        <footer>
          <Spacer />
          Site created for Chris Boden | Created with <FontAwesomeIcon icon={faHeart} size={"sm"}/> by Tanner in Next.js |<Link href="https://discord.com/invite/zFpSe7t" icon block><FontAwesomeIcon icon={faDiscord} size={"sm"}/></Link>
          <br></br> Site last updated on: <strong>{lastUpdatedOn.toDateString()} - {lastUpdatedOn.getHours()}:{lastUpdatedOn.getMinutes()} {lastUpdatedOn.getHours() >= 12 ? "PM" : "AM"}</strong> by <strong>Tanner</strong>
        </footer>
      </main>
    </div>
  )
}
