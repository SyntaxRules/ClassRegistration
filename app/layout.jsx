'use client';

import {
  MantineProvider, AppShell, Burger, Group,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import '@mantine/core/styles.css';
import Link from 'next/link';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from '../src/amplifyconfiguration.json';

Amplify.configure(config);

const client = generateClient();

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const RootLayout = ({ children }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  return (
    <html lang="en">
      <head>
        <link href="/icon_white.png" rel="shortcut icon" />
        <title>Class Registration</title>
        <meta
          content="minimum-scale=1, initthemeial-scale=1, width=device-width, user-scalable=no"
          name="viewport"
        />
      </head>
      <body>
        <MantineProvider>
          <AppShell
            navbar={{
              width: 300,
              breakpoint: 'sm',
              collapsed: { mobile: !mobileOpened, desktop: true },
            }}
          >
            <AppShell.Header
              style={{
                backgroundColor: 'green',
                width: '100%',
                height: '60px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0px 16px',
              }}
              withBorder={false}
            >
              <div>LOGO?</div>
              <Group visibleFrom="md">
                <Link href="/">SIGN IN</Link>
              </Group>
              <Burger color="#523f91" hiddenFrom="md" onClick={toggleMobile} opened={mobileOpened} size="md" />
              {/* // <Header
              //   mobileOpened={mobileOpened}
              //   toggleMobile={toggleMobile}
              // /> */}
            </AppShell.Header>

            <AppShell.Navbar p="md">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
                  <Burger color="#523f91" onClick={toggleMobile} opened={mobileOpened} size="md" />
                </div>
                <div style={{
                  width: '100%', display: 'flex', flexDirection: 'row-reverse', marginTop: 16,
                }}
                >
                  <Link href="/" visibleFrom="md">SIGN IN</Link>
                </div>
              </div>
            </AppShell.Navbar>

            {children}
            {/* <Footer /> */}
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
};

export default RootLayout;
