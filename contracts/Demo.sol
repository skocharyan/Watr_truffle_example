//SPDX-License-Identifier: MIT

pragma solidity >=0.8.7;

contract Demo {
    uint256 value = 111;

    function getValue() external view returns (uint256) {
        return value;
    }

    function setValue(uint256 newValue) external {
        value = newValue;
    }
}
