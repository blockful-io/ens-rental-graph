import {
  DomainListed,
  DomainReclaimed,
  DomainRented,
} from "../generated/ENSRent/ENSRent"
import { Listing, Rental } from "../generated/schema"

export function handleDomainListed(event: DomainListed): void {
  const tokenId = event.params.tokenId

  const listing = new Listing(tokenId.toString())
  listing.name = event.params.name
  listing.price = event.params.minPricePerSecond
  listing.lender = event.params.lender
  listing.blockNumber = event.block.number
  listing.blockTimestamp = event.block.timestamp
  listing.transactionHash = event.block.hash
  listing.active = true
  listing.save()
}

export function handleDomainReclaimed(event: DomainReclaimed): void {
  const listing = Listing.load(event.params.tokenId.toString())
  if (listing) {
    listing.active = false
    listing.save()
  }
}

export function handleDomainRented(event: DomainRented): void {
  let rental = new Rental(event.params.tokenId.toString())
  rental.borrower = event.params.borrower
  rental.duration = event.block.timestamp.plus(event.params.rentalEnd)
  rental.blockNumber = event.block.number
  rental.blockTimestamp = event.block.timestamp
  rental.transactionHash = event.block.hash
  rental.save()
}

