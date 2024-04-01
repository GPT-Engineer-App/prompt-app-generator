import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, VStack, HStack, Image, Text } from "@chakra-ui/react";
import { FaLungs, FaBrain, FaHeartbeat } from "react-icons/fa";

const BODY_PARTS = ["Chest", "Head", "Abdomen"];

const Index = () => {
  const [bodyPart, setBodyPart] = useState("");
  const [findings, setFindings] = useState("");
  const [impression, setImpression] = useState("");
  const [report, setReport] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setReport({
      bodyPart,
      findings,
      impression,
    });
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="2xl" textAlign="center" marginBottom={8}>
        Radiology Report Generator
      </Heading>

      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <FormControl>
            <FormLabel>Body Part Examined</FormLabel>
            <HStack>
              {BODY_PARTS.map((part) => (
                <Button key={part} onClick={() => setBodyPart(part)} variant={bodyPart === part ? "solid" : "outline"} leftIcon={part === "Chest" ? <FaLungs /> : part === "Head" ? <FaBrain /> : <FaHeartbeat />}>
                  {part}
                </Button>
              ))}
            </HStack>
          </FormControl>

          <FormControl>
            <FormLabel>Findings</FormLabel>
            <Textarea value={findings} onChange={(e) => setFindings(e.target.value)} placeholder="Enter the radiological findings" rows={6} />
          </FormControl>

          <FormControl>
            <FormLabel>Impression</FormLabel>
            <Input value={impression} onChange={(e) => setImpression(e.target.value)} placeholder="Enter the impression" />
          </FormControl>

          <Button type="submit" colorScheme="blue" size="lg">
            Generate Report
          </Button>
        </VStack>
      </form>

      {report && (
        <Box marginTop={12} borderWidth={1} borderRadius="lg" padding={6}>
          <Heading as="h2" size="xl" marginBottom={4}>
            Radiology Report
          </Heading>
          <Image src={`https://images.unsplash.com/photo-1530497610245-94d3c16cda28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JyZXBvcnQuYm9keVBhcnQlN0QlMjByYWRpb2xvZ3l8ZW58MHx8fHwxNzEyMDA3MjA2fDA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`${report.bodyPart} radiology`} marginBottom={4} />
          <Text fontSize="lg">
            <strong>Body Part Examined:</strong> {report.bodyPart}
          </Text>
          <Text fontSize="lg" marginTop={2}>
            <strong>Findings:</strong> {report.findings}
          </Text>
          <Text fontSize="lg" marginTop={2}>
            <strong>Impression:</strong> {report.impression}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Index;
