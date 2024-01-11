import {FC} from 'react';
import { MyInput } from '../../../enteties/MyInput';
import { MySelect } from '../../../enteties/MySelect';

interface Filter {
    sort: string;
    query: string;
  }

interface PostFilterProps {
    filter: Filter, 
    setFilter: React.Dispatch<React.SetStateAction<Filter>>
}

export const PostFilter: FC<PostFilterProps> = ({filter, setFilter}) => {

    return (
        <div>
        <MyInput 
        value={filter.query}
        onChange={e=> setFilter({...filter, query: e.target.value})}
        placeholder="Search..."/>


        <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="sortirovka"
          options={[
            {value: 'title', name: 'nazvanie'},
            {value: 'body', name: 'opisanie'},
          ]}
        />
      </div>
    );
};

