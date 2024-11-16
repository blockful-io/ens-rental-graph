import {
  NameRegistered as NameRegisteredEvent,
  NameRenewed as NameRenewedEvent,
  OwnershipTransferred as OwnershipTransferredEvent
} from "../generated/ETHRegistrarController/ETHRegistrarController"
import {
  NameRegistered,
  NameRenewed,
  OwnershipTransferred
} from "../generated/schema"

export function handleNameRegistered(event: NameRegisteredEvent): void {
  let entity = new NameRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.label = event.params.label
  entity.owner = event.params.owner
  entity.baseCost = event.params.baseCost
  entity.premium = event.params.premium
  entity.expires = event.params.expires

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNameRenewed(event: NameRenewedEvent): void {
  let entity = new NameRenewed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.label = event.params.label
  entity.cost = event.params.cost
  entity.expires = event.params.expires

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
