import React, { useMemo, useState } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  Container,
  Avatar,
  Name,
  Time,
  SubmitButton,
  ButtonText,
} from './styles';

import Background from '~/components/Background';
import api from '~/services/api';

export default function Confirm({ navigation, route }) {
  const { provider, time } = route.params;
  const [enabled, setEnabled] = useState(true);

  const dateFormatted = useMemo(
    () => formatRelative(parseISO(time), new Date(), { locale: pt }),
    [time],
  );

  async function handleAddAppointment() {
    setEnabled(false);

    if (enabled) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      });

      try {
        await api.post('appointments', {
          provider_id: provider.id,
          date: time,
        });
      } catch (err) { }
    }
  }

  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatar/50/${provider.name}`,
          }}
        />
        <Name>{provider.name}</Name>
        <Time>{dateFormatted}</Time>
        <SubmitButton onPress={() => handleAddAppointment()} enabled={enabled}>
          <ButtonText>Confirmar agendamento</ButtonText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
