import React from 'react';
import MyInput from "./ui/MyInput";
import MySelect from "./ui/MySelect";

const TaskFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Type for search..."
            />
            <MySelect
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e})}
                defaultValue="Sort:"
                options={[
                    {value: 'id', name:'By task number'},
                    {value: 'titleName', name:'By task title'},
                    {value: 'userIdAsc', name:'By user 0-9'},
                    {value: 'userIdDesc', name:'By user 9-0'},
                    {value: 'completed', name:'Completed'},
                    {value: 'uncompleted', name:'Not completed'},

                ]}/>
        </div>
    );
};

export default TaskFilter;