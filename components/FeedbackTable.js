import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Code,
  Switch,
} from "@chakra-ui/react";
import RemoveButton from "./RemoveButton";

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table backgroundColor="white" borderRadius={8}>
      <Thead>
        <Tr>
          <Th color="gray.500">Name</Th>
          <Th color="gray.500">Feedback</Th>
          <Th color="gray.500">Route</Th>
          <Th color="gray.500">Visible</Th>
          <Th>{""}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {allFeedback.map((feedback) => {
          return (
            <Tr key={feedback.id}>
              <Td fontWeight="medium">{feedback.author}</Td>
              <Td>{feedback.text}</Td>
              <Td>
                <Code>{"/"}</Code>
              </Td>
              <Td>
                <Switch
                  size="md"
                  colorScheme="green"
                  defaultIsChecked={feedback.status === "active"}
                />
              </Td>
              <Td>
                <RemoveButton feedbackId={feedback.id} />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default FeedbackTable;
