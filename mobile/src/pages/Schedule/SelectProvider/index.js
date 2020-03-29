import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Background from '~/components/Background';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';
import SelectDateTime from '~/pages/Schedule/SelectDateTime';
import {
  Container,
  ProvidersList,
  Provider,
  Avatar,
  Name,
  Content,
} from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      setProviders(response.data);
    }

    loadProviders();
  }, [providers]);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Content>
              <Provider
                onPress={() =>
                  navigation.navigate('SelectDateTime', { provider })
                }>
                <Avatar
                  source={{
                    uri: provider.avatar
                      ? provider.avatar.url
                      : `https://api.adorable.io/avatar/50/${provider.name}`,
                  }}
                />
                <Name>{provider.name}</Name>
              </Provider>

              <SelectDateTime navigation={navigation} provider={provider} />
            </Content>
          )}
        />
      </Container>
    </Background>
  );
}
