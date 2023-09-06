'use client'

import { Button } from '@nextui-org/button'
import NextLink from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className={'w-full h-[80vh] flex flex-col items-center justify-center mt-10 gap-4'}>
      <Image src={'/images/error.png'} width={215} height={260} alt={'error'} />
      <span className={'text-2xl md:text-4xl font-bold'}>해당 페이지를 찾을 수가 없습니다</span>
      <div className={'w-full flex flex-col items-center justify-center gap-3'}>
        <span className={'text-xs md:text-base'}>죄송합니다, 요청하신 페이지를 찾을 수 없습니다.</span>
        <span className={'text-xs md:text-base'}>입력하신 주소가 정확한지 다시 한번 확인해주세요.</span>
        <div className={'flex flex-row gap-2'}>
          <Button onClick={() => router.back()}>뒤로가기</Button>
          <Button color={'primary'} as={NextLink} href={'/'}>
            홈으로
          </Button>
        </div>
      </div>
    </div>
  )
}
