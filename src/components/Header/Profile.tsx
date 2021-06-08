import { Avatar, Box, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eduardo Oliveira</Text>
          <Text 
            color="gray.300"
            fontSize="small"
          >
            edu-henrique2014@hotmail.com
          </Text>
        </Box>
      ) }

      <Menu>
        <MenuButton 
          as={Avatar}
          size="md" 
          name="Eduardo Oliveira" 
          src="https://github.com/Eduardo-H.png"
          cursor="pointer"
        />
        <MenuList textColor="gray.800">
          <MenuItem>
            <Icon as={AiOutlineUser} mr="2" />
            Profile
          </MenuItem>
          <MenuItem>
            <Icon as={IoExitOutline} mr="2" />
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}