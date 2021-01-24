import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Image, List } from 'semantic-ui-react'

 
export const ListRelaxed = () => {
    const [data, setData] = useState([]); 
  useEffect(() => {
    axios.get('https://localhost:44355/api/Values')
  .then(function (response) {
    // handle success
    setData(response.data);
     debugger
    console.log(data);
  })
  },[])
  const listItems = data.map((i:any) =>
   
  <List.Item key={i.id}>
  <Image avatar src='/logo192.png' />
  <List.Content>
    <List.Header as='a'>{i.id}</List.Header>
    <List.Description>  
      <a>
        <b>{i.name}</b>
      </a>{' '}
     Harika
    </List.Description>
  </List.Content>
</List.Item>
   
);
 
    return (
        <div>
      <List relaxed>
         {listItems} 
    </List>
        </div>
    )
}

