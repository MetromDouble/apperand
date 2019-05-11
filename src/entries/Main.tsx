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
import { DotIcon } from 'src/components/icons/DotIcon';
import { EasingIcon } from 'src/components/icons/EasingIcon';
import { EyeComboIcon } from 'src/components/icons/EyeComboIcon';
import { FloatRuleComboIcon } from 'src/components/icons/FloatRuleComboIcon';
import { FullscreenComboIcon } from 'src/components/icons/FullscreenComboIcon';
import { HueRotateIcon } from 'src/components/icons/HueRotateIcon';
import { ItalicizeComboIcon } from 'src/components/icons/ItalicizeComboIcon';
import { JustifyComboIcon } from 'src/components/icons/JustifyComboIcon';
import { JustifyContentComboIcon } from 'src/components/icons/JustifyContentComboIcon';
import { LayoutIcon } from 'src/components/icons/LayoutIcon';
import { LinkIcon } from 'src/components/icons/LinkIcon';
import { ListComboIcon } from 'src/components/icons/ListComboIcon';
import { MenuBurgerIcon } from 'src/components/icons/MenuBurgerIcon';
import { MinusIcon } from 'src/components/icons/MinusIcon';
import { NewFileIcon } from 'src/components/icons/NewFileIcon';
import { OriginComboIcon } from 'src/components/icons/OriginComboIcon';
import { OverflowScrollIcon } from 'src/components/icons/OverflowScrollIcon';
import { PaperclipIcon } from 'src/components/icons/PaperclipIcon';
import { ParagraphIcon } from 'src/components/icons/ParagraphIcon';
import { PencilIcon } from 'src/components/icons/PencilIcon';
import { PlusIcon } from 'src/components/icons/PlusIcon';
import { RotateAxisComboIcon } from 'src/components/icons/RotateAxisComboIcon';
import { RotateComboIcon } from 'src/components/icons/RotateComboIcon';
import { SaturationIcon } from 'src/components/icons/SaturationIcon';
import { ScaleIcon } from 'src/components/icons/ScaleIcon';
import { SearchIcon } from 'src/components/icons/SearchIcon';
import { SettingsIcon } from 'src/components/icons/SettingsIcon';
import { SkewIcon } from 'src/components/icons/SkewIcon';
import { STIOIcon } from 'src/components/icons/STIOIcon';
import { StyleIcon } from 'src/components/icons/StyleIcon';
import { TransitionIcon } from 'src/components/icons/TransitionIcon';
import { TrashIcon } from 'src/components/icons/TrashIcon';
import { SimpleArrowComboIcon } from 'src/components/icons/SimpleArrowComboIcon';
import { TagComboIcon } from 'src/components/icons/TagComboIcon';
import { TextAlignComboIcon } from 'src/components/icons/TextAlignComboIcon';
import { TextDecorationComboIcon } from 'src/components/icons/TextDecorationComboIcon';
import { ThreeDotsComboIcon } from 'src/components/icons/ThreeDotsComboIcon';
import { TriangleArrowComboIcon } from 'src/components/icons/TriangleArrowComboIcon';
// import { ZoomComboIcon } from 'src/components/icons/ZoomComboIcon';
import { TextDirectionComboIcon } from 'src/components/icons/TextDirectionComboIcon';
import { BlurIcon } from 'src/components/icons/BlurIcon';

export const Main = () => {
  return (
    <>
      <Header />
      {(['xxs', 'xs', 's', 'm', 'l', 'xl'] as IconSizes[]).map((size) => (
        <>
          <br />
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
          <br />
          <JustifyComboIcon size={size} type="baseline" />
          <JustifyComboIcon size={size} type="center" />
          <JustifyComboIcon size={size} type="end" />
          <JustifyComboIcon size={size} type="start" />
          <JustifyComboIcon size={size} type="stretch" />
          <JustifyContentComboIcon size={size} type="center" />
          <JustifyContentComboIcon size={size} type="end" />
          <JustifyContentComboIcon size={size} type="space-around" />
          <JustifyContentComboIcon size={size} type="space-between" />
          <JustifyContentComboIcon size={size} type="start" />
          <JustifyContentComboIcon size={size} type="stretch" />
          <br />
          <AngleArrowComboIcon size={size} type="n" />
          <AngleArrowComboIcon size={size} type="e" />
          <AngleArrowComboIcon size={size} type="s" />
          <AngleArrowComboIcon size={size} type="w" />
          <AngleArrowStopComboIcon size={size} type="e" />
          <AngleArrowStopComboIcon size={size} type="w" />
          <br />
          <SimpleArrowComboIcon size={size} type="n" />
          <SimpleArrowComboIcon size={size} type="ne" />
          <SimpleArrowComboIcon size={size} type="e" />
          <SimpleArrowComboIcon size={size} type="se" />
          <SimpleArrowComboIcon size={size} type="s" />
          <SimpleArrowComboIcon size={size} type="sw" />
          <SimpleArrowComboIcon size={size} type="w" />
          <SimpleArrowComboIcon size={size} type="nw" />
          <br />
          <TriangleArrowComboIcon size={size} type="n" />
          <TriangleArrowComboIcon size={size} type="e" />
          <TriangleArrowComboIcon size={size} type="s" />
          <TriangleArrowComboIcon size={size} type="w" />
          <br />
          <AxisComboIcon size={size} type="x" />
          <AxisComboIcon size={size} type="y" />
          <AxisComboIcon size={size} type="z" />
          <br />
          <RotateAxisComboIcon size={size} type="x" />
          <RotateAxisComboIcon size={size} type="y" />
          <RotateAxisComboIcon size={size} type="z" />
          <br />
          <BorderComboIcon size={size} type="none" />
          <BorderComboIcon size={size} type="all" />
          <BorderComboIcon size={size} type="outer" />
          <BorderComboIcon size={size} type="inner" />
          <BorderComboIcon size={size} type="top" />
          <BorderComboIcon size={size} type="right" />
          <BorderComboIcon size={size} type="bottom" />
          <BorderComboIcon size={size} type="left" />
          <BorderComboIcon size={size} type="middle-horizontal" />
          <BorderComboIcon size={size} type="middle-vertical" />
          <BorderComboIcon size={size} type="part-row" />
          <BorderComboIcon size={size} type="part-column" />
          <BorderComboIcon size={size} type="part-cell" />
          <br />
          <BorderRadiusComboIcon size={size} type="whole" />
          <BorderRadiusComboIcon size={size} type="splitted" />
          <BorderRadiusComboIcon size={size} type="ne" />
          <BorderRadiusComboIcon size={size} type="se" />
          <BorderRadiusComboIcon size={size} type="sw" />
          <BorderRadiusComboIcon size={size} type="nw" />
          <br />
          <BorderWidthComboIcon size={size} type="all" />
          <BorderWidthComboIcon size={size} type="top" />
          <BorderWidthComboIcon size={size} type="right" />
          <BorderWidthComboIcon size={size} type="bottom" />
          <BorderWidthComboIcon size={size} type="left" />
          <br />
          <CapitalizeComboIcon size={size} type="all" />
          <CapitalizeComboIcon size={size} type="word" />
          <CapitalizeComboIcon size={size} type="lowercase" />
          <br />
          <ClearRuleComboIcon size={size} type="left" />
          <ClearRuleComboIcon size={size} type="right" />
          <ClearRuleComboIcon size={size} type="both" />
          <br />
          <CursorComboIcon size={size} type="none" />
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
          <br />
          <DisplayRuleComboIcon size={size} type="block" />
          <DisplayRuleComboIcon size={size} type="flex" />
          <DisplayRuleComboIcon size={size} type="grid" />
          <br />
          <DisplayRuleComboIcon size={size} type="inline" />
          <DisplayRuleComboIcon size={size} type="inline-block" />
          <br />
          <EyeComboIcon size={size} type="visible" />
          <EyeComboIcon size={size} type="hidden" />
          <br />
          <FloatRuleComboIcon size={size} type="left" />
          <FloatRuleComboIcon size={size} type="right" />
          <br />
          <FullscreenComboIcon size={size} type="enable" />
          <FullscreenComboIcon size={size} type="disable" />
          <br />
          <ItalicizeComboIcon size={size} type="enabled" />
          <ItalicizeComboIcon size={size} type="disabled" />
          <br />
          <ListComboIcon size={size} type="item" />
          <ListComboIcon size={size} type="unordered" />
          <ListComboIcon size={size} type="ordered" />
          <br />
          <OriginComboIcon size={size} type="center" />
          <OriginComboIcon size={size} type="n" />
          <OriginComboIcon size={size} type="ne" />
          <OriginComboIcon size={size} type="e" />
          <OriginComboIcon size={size} type="se" />
          <OriginComboIcon size={size} type="s" />
          <OriginComboIcon size={size} type="sw" />
          <OriginComboIcon size={size} type="w" />
          <OriginComboIcon size={size} type="nw" />
          <br />
          <RotateComboIcon size={size} type="common" />
          <RotateComboIcon size={size} type="clockwise" />
          <RotateComboIcon size={size} type="counterclockwise" />
          <br />
          <TagComboIcon size={size} type="any" />
          <TagComboIcon size={size} type="div" />
          <TagComboIcon size={size} type="span" />
          <TagComboIcon size={size} type="article" />
          <TagComboIcon size={size} type="section" />
          <TagComboIcon size={size} type="aside" />
          <TagComboIcon size={size} type="footer" />
          <TagComboIcon size={size} type="header" />
          <TagComboIcon size={size} type="nav" />
          <TagComboIcon size={size} type="b" />
          <TagComboIcon size={size} type="i" />
          <TagComboIcon size={size} type="html" />
          <TagComboIcon size={size} type="body" />
          <TagComboIcon size={size} type="head" />
          <TagComboIcon size={size} type="meta" />
          <TagComboIcon size={size} type="iframe" />
          <TagComboIcon size={size} type="button" />
          <TagComboIcon size={size} type="canvas" />
          <TagComboIcon size={size} type="form" />
          <TagComboIcon size={size} type="h1" />
          <TagComboIcon size={size} type="h2" />
          <TagComboIcon size={size} type="h3" />
          <TagComboIcon size={size} type="h4" />
          <TagComboIcon size={size} type="h5" />
          <TagComboIcon size={size} type="h6" />
          <TagComboIcon size={size} type="input" />
          <TagComboIcon size={size} type="textarea" />
          <TagComboIcon size={size} type="select" />
          <TagComboIcon size={size} type="checkbox" />
          <TagComboIcon size={size} type="radio" />
          <TagComboIcon size={size} type="label" />
          <TagComboIcon size={size} type="undefined" />
          <br />
          <TextAlignComboIcon size={size} type="center" />
          <TextAlignComboIcon size={size} type="left" />
          <TextAlignComboIcon size={size} type="right" />
          <TextAlignComboIcon size={size} type="justify" />
          <br />
          <TextDecorationComboIcon size={size} type="overline" />
          <TextDecorationComboIcon size={size} type="underline" />
          <TextDecorationComboIcon size={size} type="line-through" />
          <br />
          <ThreeDotsComboIcon size={size} type="vertical" />
          <ThreeDotsComboIcon size={size} type="horizontal" />
          <br />
          <TextDirectionComboIcon size={size} type="ltr" />
          <TextDirectionComboIcon size={size} type="rtl" />
          <br />
          {/* <ZoomComboIcon size={size} type="in" /> */}
          {/* <ZoomComboIcon size={size} type="out" /> */}
          <br />
          <BrightnessIcon size={size} />
          <ContrastIcon size={size} />
          <HueRotateIcon size={size} />
          <SaturationIcon size={size} />
          <br />
          <TransitionIcon size={size} />
          <EasingIcon size={size} />
          <ScaleIcon size={size} />
          <SkewIcon size={size} />
          <br />
          <PlusIcon size={size} />
          <MinusIcon size={size} />
          <CrossIcon size={size} />
          <CheckmarkIcon size={size} />
          <AsteriskIcon size={size} />
          <TrashIcon size={size} />
          <ColumnIcon size={size} />
          <RowIcon size={size} />
          <AccountIcon size={size} />
          <AlarmIcon size={size} />
          <AppsIcon size={size} />
          <DashboardIcon size={size} />
          <LayoutIcon size={size} />
          <AssetIcon size={size} />
          <AudioIcon size={size} />
          <BorderStyleIcon size={size} />
          <ClockIcon size={size} />
          <DatabaseIcon size={size} />
          <DotIcon size={size} />
          <LinkIcon size={size} />
          <MenuBurgerIcon size={size} />
          <NewFileIcon size={size} />
          <OverflowScrollIcon size={size} />
          <PaperclipIcon size={size} />
          <ParagraphIcon size={size} />
          <PencilIcon size={size} />
          <SearchIcon size={size} />
          <SettingsIcon size={size} />
          <STIOIcon size={size} />
          <StyleIcon size={size} />
          <BlurIcon size={size} />

          <br />
          <hr />
        </>
      ))}
    </>
  );
};
