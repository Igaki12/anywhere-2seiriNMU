import {
  Input,
  IconButton,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
  Text,
  Tooltip,
  InputLeftElement,
  InputGroup,
  Wrap,
  WrapItem,
  Spacer,
  VisuallyHidden,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { useRef, useState } from 'react'

export const SearchWord = ({
  toast,
  addWordFilter,
  deleteWordFilter,
  showSettingDetail,
  questionList,
  checkSelection,
}) => {
  const [predictionText, setPredictionText] = useState()
  // const [predictionNum, setPredictionNum] = useState(0)
  const settingDetail = showSettingDetail()
  const inputEl = useRef(null)
  const addWordFilterTag = () => {
    if (inputEl.current.value === '') return
    // ここに検索予測が０なら中止するコードを追加
    addWordFilter(inputEl.current.value)
    inputEl.current.value = ''
  }
  return (
    <>
      {inputEl.current &&
      inputEl.current.value &&
      inputEl.current.value.length > 0 ? (
        <Flex
          fontSize="lg"
          pl="4"
          pr="4"
          pt="1"
          pb="1"
          maxW={'sm'}
          textAlign={'center'}
          mt="4"
          mb="2"
          mr={'auto'}
          // color={'white'}
          bgColor={'teal.50'}
          // border="2px solid teal"
          borderRadius="full"
        >
          <SearchIcon mr={2} mt="1" />
          {inputEl.current.value}
          <Spacer />
          <Text fontWeight={'bold'} color={'gray.800'}>
            {questionList.reduce((prevGroup, group) => {
              return (
                prevGroup +
                group.groupContents.reduce((prev, question) => {
                  if (
                    question.detailInfo &&
                    question.detailInfo.indexOf(inputEl.current.value) > -1
                  )
                    return prev + 1
                  else if (
                    question.questionSentence &&
                    question.questionSentence.indexOf(inputEl.current.value) >
                      -1
                  )
                    return prev + 1
                  else if (
                    question.answer &&
                    question.answer.indexOf(inputEl.current.value) > -1
                  )
                    return prev + 1
                  else if (
                    question.commentary &&
                    question.commentary.indexOf(inputEl.current.value) > -1
                  )
                    return prev + 1
                  else if (
                    question.choices &&
                    question.choices.every(
                      (choice) => choice.indexOf(inputEl.current.value) === -1,
                    ) === false
                  )
                    return prev + 1
                  else {
                    return prev
                  }
                }, 0)
              )
            }, 0)}
            {' hits'}
          </Text>
        </Flex>
      ) : (
        <></>
      )}

      <InputGroup pl="1" pr={1}>
        <InputLeftElement
          pointerEvents="none"
          focusBorderColor="pink.400"
          children={<SearchIcon color="gray.300" ml={2} />}
        />
        <Input
          type="text"
          placeholder="キーワードを設定しさらに絞り込む"
          ref={inputEl}
          onChange={() => {
            setPredictionText(inputEl.current.value)
          }}
          onBlur={() => {
            addWordFilterTag()
            setPredictionText()
            checkSelection()
          }}
        />
      </InputGroup>

      <Wrap spacing={1} m="3" mt={2}>
        {settingDetail.wordFilter.map((word, index) => (
          <WrapItem>
            <Tag
              size={'lg'}
              key={index + 'searchTag'}
              borderRadius="full"
              variant="solid"
              colorScheme="teal"
            >
              <TagLabel key={index + 'searchTagLabel'}>
                {word}
                {' ('}
                {questionList.reduce((prevGroup, group) => {
                  return (
                    prevGroup +
                    group.groupContents.reduce((prev, question) => {
                      if (
                        question.detailInfo &&
                        question.detailInfo.indexOf(word) > -1
                      )
                        return prev + 1
                      else if (
                        question.questionSentence &&
                        question.questionSentence.indexOf(word) > -1
                      )
                        return prev + 1
                      else if (
                        question.answer &&
                        question.answer.indexOf(word) > -1
                      )
                        return prev + 1
                      else if (
                        question.commentary &&
                        question.commentary.indexOf(word) > -1
                      )
                        return prev + 1
                      else if (
                        question.choices &&
                        question.choices.every(
                          (choice) => choice.indexOf(word) === -1,
                        ) === false
                      )
                        return prev + 1
                      else {
                        return prev
                      }
                    }, 0)
                  )
                }, 0)}
                {')'}
              </TagLabel>
              <TagCloseButton
                key={index + 'searchTagCloseBtn'}
                onClick={() => {
                  deleteWordFilter(index)
                  toast({
                    title: `【${word}】タグが消去されました`,
                    status: 'success',
                    position: 'top',
                    duration: 9000,
                    isClosable: true,
                  })
                  checkSelection()
                  // saveSetting(settingDetail)
                }}
              />
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </>
  )
}
