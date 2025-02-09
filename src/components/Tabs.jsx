export default function Tabs({ children, buttons, ButtonContainger = 'div' }) { //'div'는 기본값
//   const ButtonContainger = buttonsContainer; 
//스트링 등으로 받은 요소(컴포넌트도 가능 <Tabs ButtonsContainer = {Secstion}> ) 커스텀 컴포넌트로 만듦 항상 대문자 시작
//애초에 대문자로 받아도 됨 <Tabs ButtonsContainer = "menu"> => Tabs({ButtonsContainer})

  return (
    <>
      <ButtonContainger>{buttons}</ButtonContainger>
      {children}
    </>
  );
}
