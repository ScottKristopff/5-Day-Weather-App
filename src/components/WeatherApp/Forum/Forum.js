import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Container,
  Flex,
  Heading,
  Input,
  VStack,
  FormControl,
  FormErrorMessage,
  Center,
  Box,
  useBreakpointValue
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

export const Forum = ({ searchQuery, handleWeatherFetchClick, setSearchQuery }) => {
  // Handler Function
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  //History Function & Fetch Request
  const history = useHistory();
  const apiWeatherCallAndChangeUrl = () => {
    handleWeatherFetchClick();
    history.push('/WeatherUI');
  };

  //Media Queries
  const headingFont = useBreakpointValue({ base: '2rem', md: '2.9rem', lg: '6rem' });
  return (
    <Formik
      initialValues={{ city: '' }}
      validationSchema={Yup.object({
        city: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required')
          .min(3, 'Must be 3 or more characters')
      })}
      onSubmit={(values) => {
        apiWeatherCallAndChangeUrl();
      }}
    >
      {(props) => (
        <Form>
          <Container maxW="container.xl" p={0}>
            <Flex h={{ base: 'auto', md: '100vh' }} w="1200" py={20}>
              <VStack
                w="full"
                h="full"
                p={10}
                spacing={4}
                alignItems="center"
                justifyContent="center"
              >
                <Box background="whiteAlpha.700" borderRadius={6} padding={[10, 50]}>
                  <Field name="city">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.city && form.touched.city}
                        onChange={handleChange}
                      >
                        <VStack mb={5}>
                          <Heading as="h1" fontSize={headingFont}>
                            Weather App
                          </Heading>
                        </VStack>
                        <Input
                          {...field}
                          id="city"
                          placeholder={searchQuery}
                          size="lg"
                          variant="outline"
                          errorBorderColor="crimson"
                        />
                        <FormErrorMessage>{form.errors.city}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Center>
                    <Button
                      size="md"
                      mt={6}
                      height="48px"
                      width="200px"
                      loadingText="Submitting"
                      colorScheme="blue"
                      isLoading={props.isSubmitting}
                      type="submit"
                    >
                      Weather Forecast
                    </Button>
                  </Center>
                </Box>
              </VStack>
            </Flex>
          </Container>
        </Form>
      )}
    </Formik>
  );
};
