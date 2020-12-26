import React from "react";
import { Link, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { parseISO, format } from "date-fns";
import NextLink from "next/link";

const SiteTable = ({ sites }) => {
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
            <Tr key={site.url}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>{site.url}</Td>
              <Td>
                <NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
                  <Link>View Feedback</Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(site.createdAt), "PPpp")}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default SiteTable;
