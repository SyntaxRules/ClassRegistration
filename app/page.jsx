import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import config from '../src/aws-exports';
import { listClasses } from '../src/graphql/queries';
import { HomePage } from './components/homePage';

const cookiesClient = generateServerClientUsingCookies({
  config,
  cookies,
});

const Home = async () => {
  const { data } = await cookiesClient.graphql({
    query: listClasses,
  });
  const classes = data.listClasses.items;
  console.log(classes);

  return (
    <HomePage />
  );
};
export default Home;
