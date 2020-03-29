import React, { useState } from 'react';

import { Container, Title, List } from './styles';
import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import api from '~/services/api';

export default function Dashboard({ navigation: { isFocused } }) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');
    setAppointments(response.data);
  }

  if (isFocused) {
    loadAppointments();
  }

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);
    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
          ? {
            ...appointment,
            canceled_at: response.data.canceled_at,
          }
          : appointment,
      ),
    );
  }

  return (
    <Background>
      <Container>
        <Title>Dashboard</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}
