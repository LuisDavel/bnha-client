import { api } from 'lib/axios';
import ProfilePage from 'template/Profile';
import { GetStaticProps } from 'next';

export type ProfileProps = {
  animal: [
    {
      dt_born: string;
      dt_create: string;
      id: number;
      name: string;
      type_animal_id: number;
      user_id: number;
    }
  ];
  user: any;
};

export default function Profile({ animal, user }: ProfileProps) {
  console.log(animal);
  console.log(user);

  return <ProfilePage dataAnimal={animal} dataUser={user} />;
}

export const getStaticProps: GetStaticProps = async () => {
  // const user_id = 2;
  // const resAnimal = await api.get(`/animal?user=${user_id}`);
  // const resUser = await api.get(`/user?user=${user_id}`);

  return {
    props: {
      // animal: resAnimal.data,
      // user: resUser.data
    },
    revalidate: 10
  };
};
