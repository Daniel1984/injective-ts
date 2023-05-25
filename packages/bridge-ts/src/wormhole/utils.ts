import { Network } from '@injectivelabs/networks'
import { Connection, PublicKey as SolanaPublicKey } from '@solana/web3.js'
import { GeneralException } from '@injectivelabs/exceptions'
import {
  WormholeAptosContractAddresses,
  WormholeAribtrumContractAddresses,
  WormholeContractAddresses,
  WormholeEthereumContractAddresses,
  WormholeKlaytnContractAddresses,
  WormholePolygonContractAddresses,
  WormholeSolanaContractAddresses,
  WormholeSource,
  WormholeSuiContractAddresses,
} from './types'
import {
  WORMHOLE_APTOS_CONTRACT_BY_NETWORK,
  WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK,
  WORMHOLE_CHAINS,
  WORMHOLE_CONTRACT_BY_NETWORK,
  WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK,
  WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK,
  WORMHOLE_POLYGON_CONTRACT_BY_NETWORK,
  WORMHOLE_SOLANA_CONTRACT_BY_NETWORK,
  WORMHOLE_SUI_CONTRACT_BY_NETWORK,
} from './constants'

export const getSolanaTransactionInfo = async (
  transactionId: string,
  connection: Connection,
) => {
  const POLL_INTERVAL = 1000
  const timeout = 300000

  for (let i = 0; i <= timeout / POLL_INTERVAL; i += 1) {
    try {
      const txResponse = await connection.getTransaction(transactionId)

      if (txResponse) {
        return txResponse
      }
    } catch (error: any) {
      //
    }

    await new Promise((resolve) => setTimeout(resolve, POLL_INTERVAL))
  }

  return null
}

export const getEthereumContractAddresses = (network: Network) => {
  const associatedChainContractAddresses = (
    WORMHOLE_ETHEREUM_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeEthereumContractAddresses
    }
  )[network] as WormholeEthereumContractAddresses

  const injectiveContractAddresses = (
    WORMHOLE_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeContractAddresses
    }
  )[network] as WormholeContractAddresses

  if (!injectiveContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Solana not found`),
    )
  }

  if (!injectiveContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Ethereum not found`),
    )
  }

  return {
    injectiveContractAddresses,
    associatedChainContractAddresses,
  }
}

export const getSolanaContractAddresses = (network: Network) => {
  const associatedChainContractAddresses = (
    WORMHOLE_SOLANA_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeSolanaContractAddresses
    }
  )[network] as WormholeSolanaContractAddresses

  const injectiveContractAddresses = (
    WORMHOLE_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeContractAddresses
    }
  )[network] as WormholeContractAddresses

  if (!injectiveContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Solana not found`),
    )
  }

  if (!injectiveContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Solana not found`),
    )
  }

  return {
    injectiveContractAddresses,
    associatedChainContractAddresses,
  }
}

export const getArbitrumContractAddresses = (network: Network) => {
  const associatedChainContractAddresses = (
    WORMHOLE_ARBITRUM_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeAribtrumContractAddresses
    }
  )[network] as WormholeAribtrumContractAddresses

  const injectiveContractAddresses = (
    WORMHOLE_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeContractAddresses
    }
  )[network] as WormholeContractAddresses

  if (!injectiveContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Aribtrum not found`),
    )
  }

  if (!injectiveContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Aribtrum not found`),
    )
  }

  return {
    injectiveContractAddresses,
    associatedChainContractAddresses,
  }
}

export const getPolygonContractAddresses = (network: Network) => {
  const associatedChainContractAddresses = (
    WORMHOLE_POLYGON_CONTRACT_BY_NETWORK as {
      [key: string]: WormholePolygonContractAddresses
    }
  )[network] as WormholePolygonContractAddresses

  const injectiveContractAddresses = (
    WORMHOLE_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeContractAddresses
    }
  )[network] as WormholeContractAddresses

  if (!injectiveContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Polygon not found`),
    )
  }

  if (!injectiveContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Polygon not found`),
    )
  }

  return {
    injectiveContractAddresses,
    associatedChainContractAddresses,
  }
}

export const getSuiContractAddresses = (network: Network) => {
  const associatedChainContractAddresses = (
    WORMHOLE_SUI_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeSuiContractAddresses
    }
  )[network] as WormholeSuiContractAddresses

  const injectiveContractAddresses = (
    WORMHOLE_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeContractAddresses
    }
  )[network] as WormholeContractAddresses

  if (!injectiveContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Sui not found`),
    )
  }

  if (!injectiveContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Sui not found`),
    )
  }

  return {
    injectiveContractAddresses,
    associatedChainContractAddresses,
  }
}

export const getKlaytnContractAddresses = (network: Network) => {
  const associatedChainContractAddresses = (
    WORMHOLE_KLAYTN_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeKlaytnContractAddresses
    }
  )[network] as WormholeKlaytnContractAddresses

  const injectiveContractAddresses = (
    WORMHOLE_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeContractAddresses
    }
  )[network] as WormholeContractAddresses

  if (!injectiveContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Klaytn not found`),
    )
  }

  if (!injectiveContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Klaytn not found`),
    )
  }

  return {
    injectiveContractAddresses,
    associatedChainContractAddresses,
  }
}

export const getAptosContractAddresses = (network: Network) => {
  const associatedChainContractAddresses = (
    WORMHOLE_APTOS_CONTRACT_BY_NETWORK as unknown as {
      [key: string]: WormholeAptosContractAddresses
    }
  )[network] as WormholeAptosContractAddresses

  const injectiveContractAddresses = (
    WORMHOLE_CONTRACT_BY_NETWORK as {
      [key: string]: WormholeContractAddresses
    }
  )[network] as WormholeContractAddresses

  if (!injectiveContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses) {
    throw new GeneralException(
      new Error(`Contracts for ${network} on Aptos not found`),
    )
  }

  if (!injectiveContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Injective not found`),
    )
  }

  if (!associatedChainContractAddresses.token_bridge) {
    throw new GeneralException(
      new Error(`Token Bridge Address for ${network} on Aptos not found`),
    )
  }

  return {
    injectiveContractAddresses,
    associatedChainContractAddresses,
  }
}

export const getContractAddresses = (
  network: Network,
  source: WormholeSource = WormholeSource.Solana,
) => {
  switch (source) {
    case WormholeSource.Solana:
      return getSolanaContractAddresses(network)
    case WormholeSource.Ethereum:
      return getEthereumContractAddresses(network)
    case WormholeSource.Aribtrum:
      return getArbitrumContractAddresses(network)
    case WormholeSource.Sui:
      return getSuiContractAddresses(network)
    case WormholeSource.Polygon:
      return getPolygonContractAddresses(network)
    case WormholeSource.Klaytn:
      return getKlaytnContractAddresses(network)
    case WormholeSource.Aptos:
      return getAptosContractAddresses(network)
    default:
      return getSolanaContractAddresses(network)
  }
}

export const getAssociatedChain = (
  source: WormholeSource = WormholeSource.Solana,
) => {
  switch (source) {
    case WormholeSource.Solana:
      return WORMHOLE_CHAINS.solana
    case WormholeSource.Ethereum:
      return WORMHOLE_CHAINS.ethereum
    case WormholeSource.Aribtrum:
      return WORMHOLE_CHAINS.arbitrum
    case WormholeSource.Sui:
      return WORMHOLE_CHAINS.sui
    case WormholeSource.Polygon:
      return WORMHOLE_CHAINS.polygon
    case WormholeSource.Klaytn:
      return WORMHOLE_CHAINS.klaytn
    case WormholeSource.Aptos:
      return WORMHOLE_CHAINS.aptos
    default:
      return WORMHOLE_CHAINS.solana
  }
}

export const getAssociatedChainRecipient = (
  recipient: string,
  source: WormholeSource = WormholeSource.Solana,
) => {
  switch (source) {
    case WormholeSource.Solana:
      return new SolanaPublicKey(recipient).toString()
    case WormholeSource.Ethereum:
      return recipient /* Hex Ethereum Address */
    case WormholeSource.Aribtrum:
      return recipient /* Hex Ethereum Address */
    default:
      return new SolanaPublicKey(recipient).toString()
  }
}
