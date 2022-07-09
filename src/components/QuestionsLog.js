// history[history.length - 1].askingQuestion.questionSentence
//   .split(new RegExp('(associated)', 'g'))
import {
  Image,
  Box,
  Badge,
  Button,
  Text,
  useToast,
  IconButton,
  Flex,
  Spacer,
  // useDisclosure,
  Collapse,
  Tooltip,
} from '@chakra-ui/react'
import { ArrowDownIcon, RepeatIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { ResultBar } from './ResultBar'
import '../App.css'
import { useState } from 'react'

export const QuestionsLog = ({
  // questionList,
  showHistory,
  nextQuestion,
  checkAnswer,
  // hideAnswer,
  showSettingDetail,
  reviewQuestion,
  reviewAskingQuestion,
  saveHistory,
  technicalTerm,
}) => {
  const [isOpen, setIsOpen] = useState(true)
  const toast = useToast()

  const toastGoodJob = () => {
    if (history[history.length - 1].remainingQuestionList.length === 0) {
      toast({
        position: 'top-right',
        title: 'Good Job!',
        description: '全ての問題が終わりました！',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
  }
  let history = showHistory()
  let settingDetail = showSettingDetail()
  const splitSentence = (sentence) => {
    let newSentence = ''
    technicalTerm.forEach((item, itemIndex) => {
      item.forEach((term, termNum) => {
        if (sentence.indexOf(term) === -1) {
          return
        }
        sentence.split(new RegExp(term, 'g'))
        // ここから加筆予定
      })
    })
  }
  console.log(history[history.length - 1].askedQuestionList)
  // const scrollToTheBottom = () => {
  //   let element = document.documentElement
  //   let bottom = element.scrollHeight - element.clientHeight
  //   window.scroll(0, bottom)
  // }
  return (
    <>
      <ul>
        {/* {questionList.map((group) =>
          group.groupContents.map((question, index) => ( */}
        {history[history.length - 1] &&
        history[history.length - 1].askedQuestionList.length > 0 ? (
          history[history.length - 1].askedQuestionList
            .filter((question) => question.id)
            .map((question, index) => (
              <>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  mb={3}
                  mt="3"
                  key={index + 'QuestionBox'}
                >
                  {question.questionImg &&
                    question.questionImg.map((image, imageNum) => (
                      <Image
                        src={image}
                        alt="写真読み込みエラー"
                        key={index + imageNum + 'QuestionImage'}
                      />
                    ))}
                  <Box p="6">
                    <Box display="flex" alignItems="baseline">
                      <Badge
                        borderRadius="full"
                        px="2"
                        colorScheme="teal"
                        key={index + 'questionBadge'}
                      >
                        {question.groupTag}
                      </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                        key={index + 'QuestionBox2'}
                      >
                        {question.detailInfo}
                      </Box>
                    </Box>

                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                    >
                      {question.questionSentence}
                      {question.randomizedChoices ? (
                        question.randomizedChoices.map(
                          (choice, choiceIndex) => (
                            <Flex ml={4} fontWeight="normal" key={choiceIndex}>
                              <Text>{choiceIndex + 1}.</Text>
                              <Text pl={2}>{choice}</Text>
                            </Flex>
                          ),
                        )
                      ) : (
                        <></>
                      )}
                    </Box>
                  </Box>
                </Box>
                <Box
                  maxW="sm"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  bg={'red.50'}
                  key={index + 'AnswerBox'}
                >
                  {question.answerImg.map((image) => (
                    <Image src={image} alt="写真読み込みエラー" />
                  ))}

                  <Box p="6" pb={0}>
                    <Box display="flex" alignItems="baseline">
                      <Badge variant="solid" colorScheme="red">
                        解答
                      </Badge>
                      <Box
                        color="red.700"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize=""
                        textTransform="uppercase"
                        ml="2"
                        key={index + 'AnswerBox2'}
                      >
                        {question.answer ? question.answer : '解答準備中'}
                      </Box>
                    </Box>
                    <Badge variant="solid" colorScheme="red">
                      解説
                    </Badge>
                    <Box mt="1" as="h4" lineHeight="tight">
                      {question.commentary ? question.commentary : ''}
                    </Box>
                  </Box>
                  {question.id.indexOf('r') === -1 ? (
                    <Flex pr={4} pb={4}>
                      <Spacer />
                      <Tooltip
                        hasArrow
                        label="ボタンを押すと、この質問がもう一度出題し直されます。ランダム出題の場合はランダムに、順番通り出題の場合は順番の最後に回されます。"
                        bg="gray.300"
                        color="black"
                        size={'xs'}
                      >
                        <IconButton
                          colorScheme={'red'}
                          variant="ghost"
                          aria-label="review this question"
                          onClick={() => {
                            reviewQuestion(index)
                            toast({
                              title: 'この質問はもう一度出題されます',
                              position: 'top-right',
                              // description: "We've created your account for you.",
                              status: 'info',
                              duration: 9000,
                              isClosable: true,
                            })
                          }}
                          icon={<RepeatIcon />}
                        />
                      </Tooltip>
                    </Flex>
                  ) : (
                    <Flex pr={4} pb="4" pt="40px"></Flex>
                  )}
                </Box>
              </>
            ))
        ) : (
          <></>
        )}
      </ul>
      <ResultBar
        showHistory={showHistory}
        showSettingDetail={showSettingDetail}
      />
      {/* 現在解いている問題askingQuestionはaskedQuestionとは分けて表示している。 */}
      {/* <Collapse animateOpacity> */}
      {history[history.length - 1].askingQuestion.questionSentence ? (
        <>
          <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mb={3}
            mt="3"
            className="DownSlideIn"
          >
            {history[history.length - 1].askingQuestion.questionImg.map(
              (image, imageNum) => (
                <Image
                  src={image}
                  alt="ERROR:この文章が見えた時は作成者に報告してください"
                  key={imageNum + 'QuestionImage'}
                />
              ),
            )}
            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {history[history.length - 1].askingQuestion.groupTag}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {history[history.length - 1].askingQuestion.detailInfo}
                </Box>
              </Box>

              <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                {/* ここがまだうまくいっていない */}
                {technicalTerm
                  .reduce(
                    (prev, currentTerms) => {
                      return currentTerms.term.reduce((previousArray, term) => {
                        console.log(previousArray)
                        return previousArray.reduce(
                          (previousStr, currentStr) => {
                            console.log(currentStr)
                            console.log(
                              currentStr.split(new RegExp(`(${term})`)),
                            )
                            return [
                              ...previousStr,
                              ...currentStr.split(new RegExp(`(${term})`)),
                            ]
                          },
                          '',
                        )
                      }, prev)
                    },
                    [
                      history[history.length - 1].askingQuestion
                        .questionSentence,
                    ],
                  )
                  .map((sentence, index) => (
                    <>
                      {technicalTerm.find((terms) => {
                        return terms.term.indexOf(sentence) !== -1
                      }) ? (
                        <Button
                          colorScheme={'blue'}
                          variant="link"
                          fontWeight={'bold'}
                          onClick={(terms) =>
                            toast({
                              title: 'タイトル',
                              description:
                                'associated(with)/joint/　よくわかる解説',
                              status: 'info',
                              variant: 'left-accent',
                              duration: 30000,
                              isClosable: true,
                              position: 'top-right',
                            })
                          }
                        >
                          {sentence}
                        </Button>
                      ) : (
                        <span>{sentence}</span>
                      )}
                    </>
                  ))}
                {history[history.length - 1].askingQuestion
                  .randomizedChoices ? (
                  history[
                    history.length - 1
                  ].askingQuestion.randomizedChoices.map(
                    (choice, choiceIndex) => (
                      <Flex ml={4} fontWeight="normal">
                        <Text>{choiceIndex + 1}.</Text>
                        <Text pl={2}>{choice}</Text>
                      </Flex>
                    ),
                  )
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          </Box>
          <Collapse in={isOpen} animateOpacity>
            {history[history.length - 1].isAnswered ? (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                bg={'red.50'}
                // className="DownSlideIn"
              >
                {history[history.length - 1].askingQuestion.answerImg.map(
                  (image) => (
                    <Image src={image} alt="写真読み込みエラー" />
                  ),
                )}

                <Box p="6" pb={0}>
                  <Box display="flex" alignItems="baseline">
                    <Badge variant="solid" colorScheme="red">
                      解答
                    </Badge>
                    <Box
                      color="red.700"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize=""
                      textTransform="uppercase"
                      ml="2"
                    >
                      {history[history.length - 1].askingQuestion.answer
                        ? history[history.length - 1].askingQuestion.answer
                        : '解答準備中'}
                    </Box>
                  </Box>
                  <Badge variant="solid" colorScheme="red">
                    解説
                  </Badge>
                  <Box mt="1" as="h4" lineHeight="tight">
                    {history[history.length - 1].askingQuestion.commentary
                      ? history[history.length - 1].askingQuestion.commentary
                      : ''}
                  </Box>
                </Box>
                {history[history.length - 1].askingQuestion.id.indexOf('r') ===
                -1 ? (
                  <Flex pr={4} pb={4}>
                    <Spacer />
                    <Tooltip
                      hasArrow
                      label="ボタンを押すと、この質問がもう一度出題し直されます。ランダム出題の場合はランダムに、順番通り出題の場合は順番の最後に回されます。"
                      bg="gray.300"
                      color="black"
                      size={'xs'}
                    >
                      <IconButton
                        colorScheme={'red'}
                        variant="ghost"
                        aria-label="review this question"
                        onClick={() => {
                          setIsOpen(false)
                          setTimeout(
                            () => reviewAskingQuestion(settingDetail),
                            500,
                          )

                          toast({
                            title: 'この質問はもう一度出題されます',
                            position: 'top-right',
                            // description: "We've created your account for you.",
                            status: 'info',
                            duration: 9000,
                            isClosable: true,
                          })
                        }}
                        icon={<RepeatIcon />}
                      />
                    </Tooltip>
                  </Flex>
                ) : (
                  <Flex pr={4} pb="4" pt="40px"></Flex>
                )}
              </Box>
            ) : (
              <></>
            )}
          </Collapse>
        </>
      ) : (
        <></>
      )}
      {/* </Collapse> */}
      {/* 現在解いている問題の解答に関しても分けて表示する。isAnsweredに依る。 */}

      {history[history.length - 1].isAnswered &&
      history[history.length - 1].remainingQuestionList.length > 0 ? (
        <Button
          m={1}
          ml="3"
          rightIcon={<ArrowDownIcon />}
          colorScheme="teal"
          variant={'outline'}
          onClick={() => {
            nextQuestion(settingDetail)
            // scrollToTheBottom()
            setIsOpen(false)
          }}
        >
          次の問題へ
        </Button>
      ) : (
        <></>
      )}
      {history[history.length - 1].isAnswered ? (
        <></>
      ) : (
        <Button
          m={1}
          ml="3"
          mt={-2}
          rightIcon={<ArrowDownIcon />}
          colorScheme="red"
          variant={'solid'}
          onClick={() => {
            checkAnswer()
            setIsOpen(true)
            toastGoodJob()
            saveHistory(history[history.length - 1])
            // setTimeout(() => scrollToTheBottom(), 500)
          }}
        >
          解答をみる
        </Button>
      )}
    </>
  )
}
