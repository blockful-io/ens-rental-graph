import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  NameRegistered,
  NameRenewed,
  OwnershipTransferred
} from "../generated/ETHRegistrarController/ETHRegistrarController"

export function createNameRegisteredEvent(
  name: string,
  label: Bytes,
  owner: Address,
  baseCost: BigInt,
  premium: BigInt,
  expires: BigInt
): NameRegistered {
  let nameRegisteredEvent = changetype<NameRegistered>(newMockEvent())

  nameRegisteredEvent.parameters = new Array()

  nameRegisteredEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  nameRegisteredEvent.parameters.push(
    new ethereum.EventParam("label", ethereum.Value.fromFixedBytes(label))
  )
  nameRegisteredEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  nameRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "baseCost",
      ethereum.Value.fromUnsignedBigInt(baseCost)
    )
  )
  nameRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "premium",
      ethereum.Value.fromUnsignedBigInt(premium)
    )
  )
  nameRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )

  return nameRegisteredEvent
}

export function createNameRenewedEvent(
  name: string,
  label: Bytes,
  cost: BigInt,
  expires: BigInt
): NameRenewed {
  let nameRenewedEvent = changetype<NameRenewed>(newMockEvent())

  nameRenewedEvent.parameters = new Array()

  nameRenewedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  nameRenewedEvent.parameters.push(
    new ethereum.EventParam("label", ethereum.Value.fromFixedBytes(label))
  )
  nameRenewedEvent.parameters.push(
    new ethereum.EventParam("cost", ethereum.Value.fromUnsignedBigInt(cost))
  )
  nameRenewedEvent.parameters.push(
    new ethereum.EventParam(
      "expires",
      ethereum.Value.fromUnsignedBigInt(expires)
    )
  )

  return nameRenewedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
