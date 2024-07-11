import { InfoTipContainer } from '../InfoTip/styles';
import { ToolTipContainer } from '../ToolTip/elements';
import { TargetContainer, TipBody, TipWrapper } from './elements';
import { narrowWidth } from './styles';
import { TipPlacementComponentProps } from './types';

export const InlineTip: React.FC<TipPlacementComponentProps> = ({
  alignment,
  children,
  escapeKeyPressHandler,
  id,
  info,
  isTipHidden,
  type,
  narrow,
  wrapperRef,
  zIndex,
}) => {
  const isToolType = type === 'tool';

  const InlineTipWrapper = isToolType ? ToolTipContainer : InfoTipContainer;
  const InlineWrapperProps = isToolType ? {} : { hideTip: isTipHidden };

  // CASS - you need to swap the order here

  const target = (
    <TargetContainer
      ref={wrapperRef}
      onKeyDown={
        escapeKeyPressHandler ? (e) => escapeKeyPressHandler(e) : undefined
      }
    >
      {children}
    </TargetContainer>
  );

  const tipBody = (
    <InlineTipWrapper
      alignment={alignment}
      zIndex={zIndex ?? 1}
      {...InlineWrapperProps}
    >
      <TipBody
        alignment={alignment.includes('center') ? 'centered' : 'aligned'}
        color="currentColor"
        id={id}
        width={narrow ? narrowWidth : undefined}
        zIndex="auto"
      >
        {info}
      </TipBody>
    </InlineTipWrapper>
  );

  return (
    <TipWrapper>
      {alignment.includes('top') ? (
        <>
          {tipBody}
          {target}
        </>
      ) : (
        <>
          {target}
          {tipBody}
        </>
      )}
    </TipWrapper>
  );
};
