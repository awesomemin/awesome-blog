import LightRays from '@/components/LightRays';

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-dvh border-b border-b-muted relative">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          pulsating={false}
          fadeDistance={1}
          saturation={0.8}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0}
        />
        <div className="text-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-8xl font-black">Awesomemin</h1>
          <p className="text-2xl">
            <span className="font-bold">
              안녕하세요, 개발자 겸 예비창업자 오성민입니다.
            </span>{' '}
            기술 스택에 구애받지 않고 그때 그때 재밌어 보이는 것들 위주로
            공부하고 만들어보고 있습니다.
          </p>
        </div>
      </div>
      <div className="h-40">여기는 하단 영역이에용</div>
    </div>
  );
}
