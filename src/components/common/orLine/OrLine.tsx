import React, {FC} from 'react';
import {View, Text, TextStyle} from 'react-native';
import {OrLineProps} from './orLineProps';
import {Style} from './orLine.style';

const OrLine: FC<OrLineProps> = (props: OrLineProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: props.lineHorizontalSpace,
      }}>
      <View style={Style.lineView} />
      <View>
        <Text style={[Style.labelStyle, props.labelStyle]}>{props.label}</Text>
      </View>
      <View style={Style.lineView} />
    </View>
  );
};

OrLine.defaultProps = {
  label: 'OR',
  lineHorizontalSpace: 10,
};

export default OrLine;
