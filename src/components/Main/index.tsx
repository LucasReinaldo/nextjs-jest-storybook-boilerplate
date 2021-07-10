import * as S from './styles';

export default function Main({ title = 'Hello', description = 'World' }) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
