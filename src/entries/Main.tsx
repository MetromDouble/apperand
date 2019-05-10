import React from 'react';
import { Header } from 'src/components/Header/Header';
import { IconSizes } from 'src/utils/uikit'
import { AccountIcon } from 'src/components/icons/AccountIcon';
import { AlarmIcon } from 'src/components/icons/AlarmIcon';
import { AlignComboIcon } from 'src/components/icons/AlignComboIcon';
import { AlignContentComboIcon } from 'src/components/icons/AlignContentComboIcon';
import { AngleArrowComboIcon } from 'src/components/icons/AngleArrowComboIcon';
import { AngleArrowStopComboIcon } from 'src/components/icons/AngleArrowStopComboIcon';
import { AppsIcon } from 'src/components/icons/AppsIcon';
import { AssetIcon } from 'src/components/icons/AssetIcon';
import { AsteriskIcon } from 'src/components/icons/AsteriskIcon';
import { AudioIcon } from 'src/components/icons/AudioIcon';
import { AxisComboIcon } from 'src/components/icons/AxisComboIcon';
import { BorderComboIcon } from 'src/components/icons/BorderComboIcon';
import { BorderRadiusComboIcon } from 'src/components/icons/BorderRadiusComboIcon';
import { BorderStyleIcon } from 'src/components/icons/BorderStyleIcon';
import { BorderWidthComboIcon } from 'src/components/icons/BorderWidthComboIcon';
import { BrightnessIcon } from 'src/components/icons/BrightnessIcon';
import { CapitalizeComboIcon } from 'src/components/icons/CapitalizeComboIcon';
import { CheckmarkIcon } from 'src/components/icons/CheckmarkIcon';
import { ClearRuleComboIcon } from 'src/components/icons/ClearRuleComboIcon';
import { ClockIcon } from 'src/components/icons/ClockIcon';
import { ColumnIcon } from 'src/components/icons/ColumnIcon';
import { ContrastIcon } from 'src/components/icons/ContrastIcon';
import { CrossIcon } from 'src/components/icons/CrossIcon';
import { CursorComboIcon } from 'src/components/icons/CursorComboIcon';
import { DashboardIcon } from 'src/components/icons/DashboardIcon';
import { DatabaseIcon } from 'src/components/icons/DatabaseIcon';
import { DisplayRuleComboIcon } from 'src/components/icons/DisplayRuleComboIcon';
import { RowIcon } from 'src/components/icons/RowIcon';

export const Main = () => {
  return (
    <>
      <Header />
      {(['xxs', 'xs', 's', 'm', 'l', 'xl'] as IconSizes[]).map((size) => (
        <>
          <br />
          <AccountIcon size={size} />
          <AlarmIcon size={size} />
          <AlignComboIcon size={size} type="baseline" />
          <AlignComboIcon size={size} type="center" />
          <AlignComboIcon size={size} type="end" />
          <AlignComboIcon size={size} type="start" />
          <AlignComboIcon size={size} type="stretch" />
          <AlignContentComboIcon size={size} type="center" />
          <AlignContentComboIcon size={size} type="end" />
          <AlignContentComboIcon size={size} type="space-around" />
          <AlignContentComboIcon size={size} type="space-between" />
          <AlignContentComboIcon size={size} type="start" />
          <AlignContentComboIcon size={size} type="stretch" />
          <AngleArrowComboIcon size={size} type="n" />
          <AngleArrowComboIcon size={size} type="e" />
          <AngleArrowComboIcon size={size} type="s" />
          <AngleArrowComboIcon size={size} type="w" />
          <AngleArrowStopComboIcon size={size} type="e" />
          <AngleArrowStopComboIcon size={size} type="w" />
          <AppsIcon size={size} />
          <br />
          <AssetIcon size={size} />
          <AsteriskIcon size={size} />
          <AudioIcon size={size} />
          <AxisComboIcon size={size} type="x" />
          <AxisComboIcon size={size} type="y" />
          <AxisComboIcon size={size} type="z" />
          <BorderComboIcon size={size} type="none" />
          <BorderComboIcon size={size} type="outer" />
          <BorderComboIcon size={size} type="inner" />
          <BorderComboIcon size={size} type="top" />
          <BorderComboIcon size={size} type="right" />
          <BorderComboIcon size={size} type="bottom" />
          <BorderComboIcon size={size} type="left" />
          <BorderComboIcon size={size} type="middle-horizontal" />
          <BorderComboIcon size={size} type="middle-vertical" />
          <BorderRadiusComboIcon size={size} type="whole" />
          <BorderRadiusComboIcon size={size} type="splitted" />
          <BorderRadiusComboIcon size={size} type="ne" />
          <BorderRadiusComboIcon size={size} type="se" />
          <BorderRadiusComboIcon size={size} type="sw" />
          <br />
          <BorderRadiusComboIcon size={size} type="nw" />
          <BorderStyleIcon size={size} />
          <BorderWidthComboIcon size={size} type="all" />
          <BorderWidthComboIcon size={size} type="top" />
          <BorderWidthComboIcon size={size} type="right" />
          <BorderWidthComboIcon size={size} type="bottom" />
          <BorderWidthComboIcon size={size} type="left" />
          <BrightnessIcon size={size} />
          <CapitalizeComboIcon size={size} type="all" />
          <CapitalizeComboIcon size={size} type="word" />
          <CapitalizeComboIcon size={size} type="lowercase" />
          <CheckmarkIcon size={size} />
          <ClearRuleComboIcon size={size} type="left" />
          <ClearRuleComboIcon size={size} type="right" />
          <ClearRuleComboIcon size={size} type="both" />
          <ClockIcon size={size} />
          <ColumnIcon size={size} />
          <ContrastIcon size={size} />
          <CrossIcon size={size} />
          <CursorComboIcon size={size} type="none" />
          <br />
          <CursorComboIcon size={size} type="default" />
          <CursorComboIcon size={size} type="context-menu" />
          <CursorComboIcon size={size} type="help" />
          <CursorComboIcon size={size} type="pointer" />
          <CursorComboIcon size={size} type="progress" />
          <CursorComboIcon size={size} type="wait" />
          <CursorComboIcon size={size} type="cell" />
          <CursorComboIcon size={size} type="crosshair" />
          <CursorComboIcon size={size} type="text" />
          <CursorComboIcon size={size} type="vertical-text" />
          <CursorComboIcon size={size} type="alias" />
          <CursorComboIcon size={size} type="copy" />
          <CursorComboIcon size={size} type="move" />
          <CursorComboIcon size={size} type="not-allowed" />
          <CursorComboIcon size={size} type="col-resize" />
          <CursorComboIcon size={size} type="row-resize" />
          <CursorComboIcon size={size} type="n-resize" />
          <CursorComboIcon size={size} type="ne-resize" />
          <CursorComboIcon size={size} type="e-resize" />
          <CursorComboIcon size={size} type="se-resize" />
          <br />
          <CursorComboIcon size={size} type="s-resize" />
          <CursorComboIcon size={size} type="sw-resize" />
          <CursorComboIcon size={size} type="w-resize" />
          <CursorComboIcon size={size} type="nw-resize" />
          <CursorComboIcon size={size} type="ew-resize" />
          <CursorComboIcon size={size} type="ns-resize" />
          <CursorComboIcon size={size} type="nesw-resize" />
          <CursorComboIcon size={size} type="nwse-resize" />
          <CursorComboIcon size={size} type="zoom-in" />
          <CursorComboIcon size={size} type="zoom-out" />
          <CursorComboIcon size={size} type="grab" />
          <CursorComboIcon size={size} type="grabbing" />
          <DashboardIcon size={size} />
          <DatabaseIcon size={size} />
          <DisplayRuleComboIcon size={size} type="block" />
          <DisplayRuleComboIcon size={size} type="flex" />
          <DisplayRuleComboIcon size={size} type="grid" />
          <DisplayRuleComboIcon size={size} type="inline" />
          <DisplayRuleComboIcon size={size} type="inline-block" />
          <RowIcon size={size} />

          <br />
          <hr />
        </>
      ))}
    </>
  );
};
