import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import Background from '~/components/Background';
import DateInput from '~/components/DateInput';
import api from '~/services/api';
import logo from '~/assets/moustache.png';
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container,
  ProvidersList,
  Content,
  Header,
  ScheduleOptions,
  ContentSchedule,
  Duration,
  Price,
  ServiceList,
  TextHeader,
  SubmitButton,
  ButtonText,
  Logo,
  Separator,
  ContentPriceDuration,
  ButtonModal,
  ContentModal,
  ProvidersButton,
  Provider,
  Avatar, Name, HeaderP, Title
} from './styles';

export default function ScheduleDashboard({ navigation }) {
  const [providers, setProviders] = useState([]);
  const [pro, setPro] = useState([{ name: 'Todos os profissionais' }]);
  const [services, setServices] = useState([]);
  const [serv, setServ] = useState('')
  const [date, setDate] = useState(new Date());
  const [visibleS, setVisibleS] = useState(false);
  const [visibleP, setVisibleP] = useState(false);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('services');
      setServices(response.data);
    }
    loadServices();
  }, []);

  function handleModalService() {
    setVisibleS(!visibleS);
  };

  function handleModalProvider() {
    setVisibleP(!visibleP);
  };

  useEffect(() => {
    async function loadProviders() {
      const response = await api.get('providers');
      setProviders(response.data);
      setPro(response.data)
    }
    loadProviders();
  }, []);


  function renderItem({ item: provider, index }) {
    return (
      <>
        {index === 0 ? (
          <Provider onPress={() => { setPro(providers); handleModalProvider() }}>
            <Avatar
              source={logo}
            />
            <Name onPress={() => { setPro(providers); handleModalProvider() }}>Todos os profissionais</Name>
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
          <Name onPress={() => { setPro([provider]); handleModalProvider() }}>{provider.name}</Name>
        </Provider>
      </>
    )
  }

  function renderItemService({ item: service, index }) {
    return (
      <>
        {index !== 0 ? <Separator></Separator> : <></>}
        <Provider onPress={() => {
          setServ(service); handleModalService()
        }}>
          <Avatar
            source={logo}
          />
          <Name onPress={() => {
            setServ(service); handleModalService()
          }}>{service.name}</Name>
        </Provider>
      </>
    )

  }

  return (
    <Background>
      <Container>

        <Modal isVisible={visibleS}>
          <Content>
            <ButtonModal onPress={handleModalService}>
              <Icon name="close" size={20} color="#fff" />
            </ButtonModal>
            <ContentModal>
              <>
                <HeaderP>
                  <Title>Selecione um profissional</Title>
                </HeaderP>
                <ProvidersList
                  data={services}
                  keyExtractor={service => String(service.id)}
                  renderItem={renderItemService}
                />
              </>
            </ContentModal>
          </Content>
        </Modal>
        <Modal isVisible={visibleP}>
          <Content>
            <ButtonModal onPress={handleModalProvider}>
              <Icon name="close" size={20} color="#fff" />
            </ButtonModal>
            <ContentModal>
              <>
                <HeaderP>
                  <Title>Selecione um profissional</Title>
                </HeaderP>
                <ProvidersList
                  data={providers}
                  keyExtractor={provider => String(provider.id)}
                  renderItem={renderItem}
                />
              </>
            </ContentModal>
          </Content>
        </Modal>

        <ScheduleOptions>
          <Header>
            <DateInput date={date} onChange={setDate} />
            <ServiceList onPress={handleModalService} >
              <TextHeader>{serv !== '' ? serv.name : 'Selecione um serviço'}</TextHeader>
            </ServiceList>
            <ProvidersButton onPress={handleModalProvider} >
              <TextHeader>{pro.length >= 2 ? 'Todos os profissionais' : pro[0].name}</TextHeader>
            </ProvidersButton>
          </Header>
          <ContentSchedule>
            <Logo source={logo} />
            <ContentPriceDuration>
              <Price>Preço: {serv !== '' ? `R$ ${serv.price}` : ''}</Price>
              <Duration>Duração: {serv !== '' ? `${serv.duration} minutos` : ''} </Duration>
            </ContentPriceDuration>
          </ContentSchedule>
        </ScheduleOptions>
        <SubmitButton onPress={() => navigation.navigate('SelectHour', {
          providers: pro,
          service: serv,
          date
        })}>
          <ButtonText>Procurar horário</ButtonText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
