import React, { useState, useCallback, useEffect } from 'react';
import { TouchableOpacity} from 'react-native';
import { width, height } from 'react-native-dimension';
import { Wrapper, Text, Icons,Headers, Modals} from '../../../components';
import { useHooks } from './hooks'
import { appImages, colors, routes, sizes, fontSizes, appFonts, appIcons} from '../../../services';
import { GiftedChat, Bubble, InputToolbar, Message } from 'react-native-gifted-chat';


export default function Home(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);
  const renderMessage = (props) => {
    return (
      <Message
        {...props}
        renderAvatar={() => null} // This hides the avatar
      />
    );
  };
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: colors.messageBoxColor1,
            paddingVertical: height(1)
          },
          left: {
            paddingVertical: height(1),
            backgroundColor: colors.messageBoxColor2,

          },
        }}
        textStyle={{
          right: {
            color: colors.appTextColor1,
            fontFamily: appFonts.appTextRegular,
            fontSize: fontSizes.regular,
          },
          left: {
            color: colors.appTextColor1,
            fontFamily: appFonts.appTextRegular,
            fontSize: fontSizes.regular
          },
        }}
        renderTime={() => null}
      />
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <Wrapper isAbsoluteFill marginHorizontalSmall justifyContentCenter alignItemsCenter>
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: colors.messageInputContainer,
            justifyContent: 'space-around',
            alignItems: 'center',
            borderColor: colors.messageBoxBorderColor1,
            borderWidth: height(0.1),
            fontFamily: appFonts.appTextRegular,
            borderRadius: 30,
          }}
          primaryStyle={{ alignItems: 'center' }}
        />
      </Wrapper>

    );
  };
  const renderSend = (props) => {
    return (
      <Wrapper justifyContentCenter alignItemsCenter style={{marginRight: width(3) }}>
        <Icons.Button onPress={() => {
          if (props.text && props.onSend) {
            props.onSend({ text: props.text.trim() }, true);
          }
        }} customIcon={appIcons.send} buttonColor={colors.transparent} iconSize={sizes.images.small}  />
      </Wrapper>
    );
  };
  const [selectedVersion, setSelectedVersion] = useState('KJV');
  const { navigate, goBack } = props.navigation
  const {
    modalHomeVisible,
    modalHomeVisibility,
    data,
    value,
    setValue,
    modalLogoutVisible,
    modalLogoutVisibility,
  } = useHooks()
  return (
    <>
      <Wrapper isImageBackground source={appImages.backgroundImage}>
        <Wrapper >
          <Wrapper flexDirectionRow justifyContentSpaceBetween marginVerticalMedium paddingHorizontalBase >
            <Headers.Primary title={'Quran AI'} titleStyle={{ fontFamily: appFonts.appTextBold, color: colors.appTextColor1,  fontSize: fontSizes.h4, }} containerStyle={{ height: height(10),backgroundColor:colors.transparent, }} />
            <Wrapper flexDirectionRow>
              <Wrapper marginHorizontalSmall style={{ alignSelf: 'center', justifyContent: 'center', height: sizes.images.mediumSmall, width: sizes.images.mediumSmall, backgroundColor: colors.buttonColor3, borderRadius: 150 }}>
                <Icons.Button onPress={() => { navigate(routes.notifications) }} buttonStyle={{ alignSelf: 'center', justifyContent: 'center', height: sizes.icons.large, width: sizes.icons.large }} iconSize={sizes.icons.medium} iconColor={colors.iconColor4} buttonColor={colors.transparent} iconName={'bell-outline'} iconType={'material-community'} />
              </Wrapper>
              <Wrapper style={{ alignSelf: 'center', justifyContent: 'center', height: sizes.images.mediumSmall, width: sizes.images.mediumSmall, backgroundColor: 'pink', borderColor: colors.buttonColor1, borderRadius: 150, borderWidth: height(0.4) }} >
                <Icons.Custom onPress={modalHomeVisibility} icon={appImages.profile} containerStyle={{ alignSelf: 'center', justifyContent: 'center', }} size={sizes.images.mediumXSmall} />
              </Wrapper>
            </Wrapper>
          </Wrapper>

          <Modals.Swipable navigate={navigate} data={data} modalLogout={() => { modalLogoutVisibility(); modalHomeVisibility(false) }} setValue={setValue} value={value} hideContent={true} hideContent3={true} hideHeader visible={modalHomeVisible} toggle={modalHomeVisibility} disableBackdropPress={false} />
          <Modals.Swipable visible={modalLogoutVisible} toggle={modalLogoutVisibility} hideContent2={true} hideContent={true} hideHeader disableBackdropPress={false} />

        </Wrapper>
        {/* </ScrollViews.KeyboardAvoiding> */}
        <GiftedChat
          style={{}}
          messages={messages}
          placeholder=' Type your scripture here...'
          onSend={(messages) => onSend(messages)}
          user={{
            _id: 1,
          }}
          renderBubble={renderBubble}
          renderMessage={renderMessage}
          renderInputToolbar={renderInputToolbar}
          renderSend={renderSend}
        // renderTime={renderTime}
        />
        <Wrapper flexDirectionRow
          justifyContentSpaceBetween
          style={{ paddingHorizontal: width(5), paddingTop:height(1) }}
          paddingVerticalBase>
          <Wrapper justifyContentCenter>
            <Text isRegular
              style={{ fontFamily: appFonts.appTextBold, }}>Response Type</Text>

          </Wrapper>
          <Wrapper
            style={{ borderRadius: 100, borderColor: colors.buttonColor1, borderWidth: height(0.2) }} paddingHorizontalTiny
            paddingVerticalTiny
            justifyContentSpaceAround
            alignItemsCenter
            flexDirectionRow
            backgroundColor={colors.appColor11}>

            <TouchableOpacity onPress={() => setSelectedVersion('KJV')}>
              <Wrapper
                alignItemsCenter
                justifyContentCenter
                backgroundColor={selectedVersion === 'KJV' ? colors.buttonColor1 : colors.buttonColor3}
                paddingVerticalTiny
                paddingHorizontalBase
                style={{ borderRadius: 100 }}>
                <Text isSmall style={{ fontFamily: appFonts.appTextRegular }} >KJV</Text>
              </Wrapper>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedVersion('NIV')}>
              <Wrapper
                alignItemsCenter
                justifyContentCenter
                backgroundColor={selectedVersion === 'NIV' ? colors.buttonColor1 : colors.buttonColor3}
                paddingVerticalTiny
                paddingHorizontalBase
                style={{ borderRadius: 100 }}>
                <Text isSmall style={{ fontFamily: appFonts.appTextRegular }}>NIV</Text>
              </Wrapper>
            </TouchableOpacity>
          </Wrapper>


        </Wrapper>
      </Wrapper>

    </>
  );
}


