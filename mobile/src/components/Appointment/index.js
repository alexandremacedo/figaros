import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Left, Avatar, Info, Name, Time, Service } from './styles';

export default function Appointment({ data, onCancel }) {
  const dateParsed = useMemo(() => {
    return formatRelative(parseISO(data.date), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.date]);


  return (
    <>
      {!data.canceled_at && !data.past && (
        <>
          <Container past={data.past}>
            <Left>
              <Avatar
                source={{
                  uri: data.provider.avatar
                    ? data.provider.avatar.url
                    : `https://api.adorable.io/avatar/50/${data.provider.name}`,
                }}
              />
              <Info>
                <Name>{data.provider.name}</Name>
                <Service>{data.service.name}</Service>
                <Service>Preço: R$ {data.service.price}</Service>
                <Service>Duração: {data.service.duration} minutos</Service>
                <Time>{dateParsed}</Time>
              </Info>
            </Left>

            {data.cancelable && !data.canceled_at && (
              <TouchableOpacity onPress={onCancel}>
                <Icon name="event-busy" size={20} color="#d63031" />
              </TouchableOpacity>
            )}
          </Container>
        </>
      )}
    </>
  );
}
