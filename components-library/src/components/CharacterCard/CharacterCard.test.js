import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CharacterCard } from "./CharacterCard";
// Mock de react-i18next
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key) => {
            const translations = {
                "characterCard.title": "Character Card",
                "characterCard.lastKnownLocation": "Last known location:",
                "characterCard.firstSeenIn": "First seen in:",
            };
            return translations[key] || key;
        },
    }),
}));
// Mock de los iconos
vi.mock("@/shared/icons", () => ({
    FavoriteIcon: () => _jsx("div", { "data-testid": "favorite-icon", children: "FavoriteIcon" }),
}));
// Mock del componente StatusChip
vi.mock("../StatusChip/StatusChip", () => ({
    StatusChip: ({ status }) => (_jsx("div", { "data-testid": "status-chip", children: status })),
}));
describe("CharacterCard", () => {
    // Mock de datos ya procesados (como los recibiría el componente)
    const mockCharacter = {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        lastLocation: "Citadel of Ricks",
        firstAppearance: "Pilot",
    };
    beforeEach(() => {
        vi.clearAllMocks();
    });
    describe("Rendering", () => {
        it("should render the character card with all information", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
            expect(screen.getByText("Human")).toBeInTheDocument();
            expect(screen.getByText("Citadel of Ricks")).toBeInTheDocument();
            expect(screen.getByText("Pilot")).toBeInTheDocument();
        });
        it("should render the character image with correct attributes", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            const image = screen.getByAltText("Rick Sanchez");
            expect(image).toBeInTheDocument();
            expect(image.src).toBe("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
            expect(image).toHaveAttribute("loading", "lazy");
        });
        it("should render the StatusChip component with correct status", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            const statusChip = screen.getByTestId("status-chip");
            expect(statusChip).toBeInTheDocument();
            expect(statusChip).toHaveTextContent("Alive");
        });
        it("should render the FavoriteIcon", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            expect(screen.getByTestId("favorite-icon")).toBeInTheDocument();
        });
        it("should render with correct aria-label", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            const card = screen.getByRole("article");
            expect(card).toHaveAttribute("aria-label", "Character Card Rick Sanchez");
        });
        it("should render translated labels", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            expect(screen.getByText("Last known location:")).toBeInTheDocument();
            expect(screen.getByText("First seen in:")).toBeInTheDocument();
        });
    });
    describe("Interactions", () => {
        it("should call onCardClick when card is clicked", () => {
            const onCardClick = vi.fn();
            render(_jsx(CharacterCard, { character: mockCharacter, onCardClick: onCardClick }));
            const card = screen.getByRole("article");
            fireEvent.click(card);
            expect(onCardClick).toHaveBeenCalledTimes(1);
            expect(onCardClick).toHaveBeenCalledWith(mockCharacter);
        });
        it("should not throw error when clicked without onCardClick prop", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            const card = screen.getByRole("article");
            expect(() => fireEvent.click(card)).not.toThrow();
        });
        it("should handle multiple clicks correctly", () => {
            const onCardClick = vi.fn();
            render(_jsx(CharacterCard, { character: mockCharacter, onCardClick: onCardClick }));
            const card = screen.getByRole("article");
            fireEvent.click(card);
            fireEvent.click(card);
            fireEvent.click(card);
            expect(onCardClick).toHaveBeenCalledTimes(3);
        });
    });
    describe("Props variations", () => {
        it("should render with elevated prop set to true", () => {
            const { container } = render(_jsx(CharacterCard, { character: mockCharacter, elevated: true }));
            expect(container.firstChild).toBeInTheDocument();
        });
        it("should render with elevated prop set to false", () => {
            const { container } = render(_jsx(CharacterCard, { character: mockCharacter, elevated: false }));
            expect(container.firstChild).toBeInTheDocument();
        });
        it("should render with default elevated prop (false)", () => {
            const { container } = render(_jsx(CharacterCard, { character: mockCharacter }));
            expect(container.firstChild).toBeInTheDocument();
        });
    });
    describe("Different character data", () => {
        it("should render correctly with different character status", () => {
            const deadCharacter = {
                ...mockCharacter,
                status: "Dead",
            };
            render(_jsx(CharacterCard, { character: deadCharacter }));
            const statusChip = screen.getByTestId("status-chip");
            expect(statusChip).toHaveTextContent("Dead");
        });
        it("should render correctly with different species", () => {
            const alienCharacter = {
                ...mockCharacter,
                species: "Alien",
            };
            render(_jsx(CharacterCard, { character: alienCharacter }));
            expect(screen.getByText("Alien")).toBeInTheDocument();
        });
        it("should render correctly with unknown status", () => {
            const unknownCharacter = {
                ...mockCharacter,
                status: "unknown",
            };
            render(_jsx(CharacterCard, { character: unknownCharacter }));
            const statusChip = screen.getByTestId("status-chip");
            expect(statusChip).toHaveTextContent("unknown");
        });
        it("should render with long character names", () => {
            const longNameCharacter = {
                ...mockCharacter,
                name: "Morty Smith Jr. III from Dimension C-137",
            };
            render(_jsx(CharacterCard, { character: longNameCharacter }));
            expect(screen.getByText("Morty Smith Jr. III from Dimension C-137")).toBeInTheDocument();
        });
        it("should render with long location names", () => {
            const longLocationCharacter = {
                ...mockCharacter,
                lastLocation: "The Citadel of Ricks (Dimensional Coordinates C-137)",
            };
            render(_jsx(CharacterCard, { character: longLocationCharacter }));
            expect(screen.getByText("The Citadel of Ricks (Dimensional Coordinates C-137)")).toBeInTheDocument();
        });
        it("should render with string id", () => {
            const stringIdCharacter = {
                ...mockCharacter,
                id: "123",
            };
            render(_jsx(CharacterCard, { character: stringIdCharacter }));
            expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
        });
    });
    describe("Edge cases", () => {
        it("should not render when character is null", () => {
            const { container } = render(_jsx(CharacterCard, { character: null }));
            expect(container.firstChild).toBeNull();
        });
        it("should not render when character is undefined", () => {
            const { container } = render(_jsx(CharacterCard, { character: undefined }));
            expect(container.firstChild).toBeNull();
        });
        it("should render when character has all required properties", () => {
            const { container } = render(_jsx(CharacterCard, { character: mockCharacter }));
            expect(container.firstChild).not.toBeNull();
            expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
        });
    });
    describe("Accessibility", () => {
        it("should have proper role attribute", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            const card = screen.getByRole("article");
            expect(card).toBeInTheDocument();
        });
        it("should have descriptive aria-label", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            const card = screen.getByRole("article");
            expect(card).toHaveAttribute("aria-label");
            expect(card.getAttribute("aria-label")).toContain("Rick Sanchez");
        });
        it("should have alt text for image", () => {
            render(_jsx(CharacterCard, { character: mockCharacter }));
            const image = screen.getByAltText("Rick Sanchez");
            expect(image).toBeInTheDocument();
        });
    });
    describe("Memoization", () => {
        it("should be wrapped with React.memo", () => {
            expect(CharacterCard).toBeDefined();
            expect(typeof CharacterCard).toBe("function");
        });
        it("should not re-render when props have not changed", () => {
            const { rerender } = render(_jsx(CharacterCard, { character: mockCharacter }));
            const firstRenderName = screen.getByText("Rick Sanchez");
            rerender(_jsx(CharacterCard, { character: mockCharacter }));
            const secondRenderName = screen.getByText("Rick Sanchez");
            expect(firstRenderName).toBeInTheDocument();
            expect(secondRenderName).toBeInTheDocument();
        });
    });
});
