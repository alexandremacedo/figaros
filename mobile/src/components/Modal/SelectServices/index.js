import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import logo from '~/assets/moustache.png';

import {
  ServicesList,
  Service,
  Avatar,
  Name,
  Separator,
  Header,
  Title
} from './styles';

export default function SelectServices({ data }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('services');
      setServices(response.data);
      console.log(services)
    }
    loadServices();
  }, [services]);

  function renderItem({ item: service, index }) {
    return (
      <>
        {index !== 0 ? <Separator></Separator> : <></>}
        <Service>
          <Avatar
            source={logo}
          />
          {/* <Logo source={logo} /> */}
          <Name>{service.name}</Name>
        </Service>
      </>
    )

  }

  return (
    <>
      <Header>
        <Title>Selecione um serviço</Title>
      </Header>
      <ServicesList
        data={services}
        keyExtractor={service => String(service.id)}
        renderItem={renderItem}
      />
    </>
  );
}
