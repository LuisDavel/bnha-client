export default function PatchNotes() {
  return <>aaa</>;
}


import CardHeroPatchNotes from 'components/CardHeroPatchNotes';
import { api } from 'lib/axios';
import { useQuery } from 'react-query';

import Select from 'react-select';

export default function PatchNotes() {
  const { data, error, isLoading } = useQuery(
    'user',
    async () => await api.get('user.php')
  );
  const userData = data?.data.data;
  const option = userData?.map(v => ({
    value: v.id,
    label: v.name
  }));

  return (
    <>
      <Select options={option} />
      {isLoading ? (
        <p> Carregando ... </p>
      ) : (
        result?.map((v: any) => (
          <>
            <S.Text>
              {v.name}: <span>{v.descricao}</span>
            </S.Text>
            <S.Hr className="hr anim" />
          </>
        ))
      )}
      <input type="text" />
      {/* <CardHeroPatchNotes /> */}
    </>
  );
}
