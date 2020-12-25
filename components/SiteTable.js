import React from "react";
import { Link, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const SiteTable = ({ sites }) => {
  console.log(sites);
  return (
    <Table backgroundColor="white" borderRadius={8}>
      <Thead>
        <Tr>
          <Th color="gray.500">Name</Th>
          <Th color="gray.500">Site Link</Th>
          <Th color="gray.500">Feedback Link</Th>
          <Th color="gray.500">Date Added</Th>
          <Th>{""}</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sites.map((site) => {
          return (
            <Tr key={site.id}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>View Feedback</Td>
              <Td>{site.createdAt}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default SiteTable;
