import {FC} from 'react';

// interface MySelectProps {
//     options: any, 
//     defaultValue: any, 
//     value: any, 
//     onChange: any
// }


interface Option {
    value: string;
    name: string;
  }
  
  interface MySelectProps {
    options: Option[];
    defaultValue: string;
    value: string;
    onChange: (selectedValue: string) => void;
  }

export const MySelect: FC<MySelectProps> = ({options, defaultValue, value, onChange}) => {

    return (
        <select  
        value={value}
        onChange={event => onChange(event.target.value)}
        
        >
            <option disabled value="">
                {defaultValue}
            </option>
            {options.map((option, index) => 
                <option key={index} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};
