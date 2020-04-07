import React, { useEffect, useState } from 'react';
import api from '~/services/api';
import logo from '~/assets/moustache.png';
import {
  ProvidersList,
  Provider,
  Avatar,
  Name,
  Separator,
  Header,
  Title
} from './styles';

export default function SelectProviders({ providers, setPro, handleModalProvider }) {

  function renderItem({ item: provider, index }) {
    return (
      <>
        {index === 0 ? (
          <Provider onPress={() => { setPro(providers); handleModalProvider() }}>
            <Avatar
              source={logo}
            />
            <Name>Todos os profissionais</Name>
          </Provider>
        ) : <></>}
        <Separator></Separator>
        <Provider onPress={() => { setPro([provider]); handleModalProvider() }}>
          <Avatar
            source={{
              uri: provider.avatar
                ? provider.avatar.url
                : `https://api.adorable.io/avatar/50/${provider.name}`,
            }}
          />
          <Name>{provider.name}</Name>
        </Provider>
      </>
    )
  }

  return (
    <>
      <Header>
        <Title>Selecione um profissional</Title>
      </Header>
      <ProvidersList
        data={providers}
        keyExtractor={provider => String(provider.id)}
        renderItem={renderItem}
      />
    </>
  );
}
