import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, HourList, Hour, Title } from './styles';

import DateInput from '~/components/DateInput';
import api from '~/services/api';

export default function SelectDateTime({ navigation, provider, date, service }) {
  const [hours, setHours] = useState([]);

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      service,
      time,
    });
  }

  return (
    <Container>
      <HourList
        data={hours}
        keyExtractor={item => item.time}
        renderItem={({ item }) => (
          <Hour
            onPress={() => handleSelectHour(item.value)}
            enabled={item.available}>
            <Title>{item.time}</Title>
          </Hour>
        )}
      />
    </Container>
  );
}
