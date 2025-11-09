<script lang="ts">
    import type { UniversityCard } from "@/lib/types/university";
    import SvelteIcon from "./SvelteIcon.svelte";
    import { routes } from "@/lib/routes";

    export let universityCardData: UniversityCard = {
        name: "",
        slug: "",
        city: "",
        country: "",
        image_url: "",
        min_fee: 0,
        max_fee: 0,
        time: [],
        specializations: [],
    };

    const icons = {
        mapDot: "/src/icons/mapDot.svg",
        cash: "/src/icons/cash.svg",
        clock: "/src/icons/clock.svg",
    };
</script>

<div class="university-card" data-slug={universityCardData.slug}>
    <!-- Card Image -->
    <div class="card-image">
        <img
            src={universityCardData.image_url ||
                "/images/university-default.jpg"}
            alt={`${universityCardData.name} campus`}
            loading="lazy"
        />
        <div class="image-overlay">
            <button class="favorite-btn" title="Add to favorites">
                <SvelteIcon iconUrl="/src/icons/heart.svg" />
            </button>
        </div>
    </div>

    <!-- Card Content -->
    <div class="card-content">
        <!-- University Header -->
        <div class="university-header">
            <h3 class="university-name">
                <a href={`${routes.UNIVERSITIES}/${universityCardData.slug}`}>
                    {universityCardData.name}
                </a>
            </h3>

            <div class="location">
                <SvelteIcon iconUrl={icons.mapDot} />
                <span
                    >{universityCardData.city}, {universityCardData.country}</span
                >
            </div>
        </div>

        <!-- Key Information -->
        <div class="university-info">
            <div class="info-grid">
                <div class="info-item">
                    <div class="info-icon">
                        <SvelteIcon iconUrl={icons.cash} />
                    </div>
                    <div class="info-content">
                        <span class="info-label">Annual Fee</span>
                        <span class="info-value"
                            >${universityCardData.min_fee}K - ${universityCardData.max_fee}K</span
                        >
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">
                        <SvelteIcon iconUrl={icons.clock} />
                    </div>
                    <div class="info-content">
                        <span class="info-label">Duration</span>
                        <span class="info-value"
                            >{universityCardData.time.join(", ")}</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- Specializations -->
        {#if universityCardData.specializations && universityCardData.specializations.length > 0}
            <div class="specializations">
                <div class="specialization-header">
                    <span class="spec-label">Popular Programs:</span>
                </div>
                <div class="specialization-tags">
                    {#each universityCardData.specializations.slice(0, 3) as specialization}
                        <span class="specialization-tag">{specialization}</span>
                    {/each}
                    {#if universityCardData.specializations.length > 3}
                        <span class="specialization-tag more"
                            >+{universityCardData.specializations.length - 3} more</span
                        >
                    {/if}
                </div>
            </div>
        {/if}

        <!-- Card Actions -->
        <div class="card-actions">
            <a
                href={`${routes.UNIVERSITIES}/${universityCardData.slug}`}
                class="btn btn-primary"
            >
                View Details
            </a>
            <button class="btn btn-outline"> Get Info </button>
        </div>
    </div>
</div>

<style>
    .university-card {
        background: white;
        border-radius: 16px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        overflow: hidden;
        transition: all 0.3s ease;
        border: 1px solid #f1f5f9;
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .university-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        border-color: #e2e8f0;
    }

    /* Card Image */
    .card-image {
        position: relative;
        height: 200px;
        overflow: hidden;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .university-card:hover .card-image img {
        transform: scale(1.05);
    }

    .image-overlay {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            transparent 30%,
            transparent 70%,
            rgba(0, 0, 0, 0.1) 100%
        );
        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        padding: 12px;
    }

    .favorite-btn {
        background: rgba(255, 255, 255, 0.9);
        border: none;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(4px);
    }

    .favorite-btn:hover {
        background: #ef4444;
        color: white;
        transform: scale(1.1);
    }

    /* Card Content */
    .card-content {
        padding: 20px;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    /* University Header */
    .university-header {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .university-name {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        line-height: 1.3;
    }

    .university-name a {
        color: #1e293b;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    .university-name a:hover {
        color: #3b82f6;
    }

    .location {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #64748b;
        font-size: 14px;
        font-weight: 500;
    }

    /* University Info */
    .university-info {
        flex: 1;
    }

    .info-grid {
        display: grid;
        gap: 12px;
    }

    .info-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px;
        background: #f8fafc;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
    }

    .info-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3b82f6;
    }

    .info-content {
        display: flex;
        flex-direction: column;
        gap: 2px;
        flex: 1;
    }

    .info-label {
        font-size: 12px;
        color: #64748b;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .info-value {
        font-size: 14px;
        color: #1e293b;
        font-weight: 600;
    }

    /* Specializations */
    .specializations {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .specialization-header {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .spec-label {
        font-size: 12px;
        color: #64748b;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .specialization-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
    }

    .specialization-tag {
        background: #eff6ff;
        color: #1e40af;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 11px;
        font-weight: 500;
        white-space: nowrap;
        border: 1px solid #dbeafe;
    }

    .specialization-tag.more {
        background: #f1f5f9;
        color: #64748b;
        border-color: #e2e8f0;
    }

    /* Card Actions */
    .card-actions {
        display: flex;
        gap: 8px;
        margin-top: auto;
    }

    .btn {
        flex: 1;
        padding: 10px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        text-decoration: none;
        text-align: center;
        cursor: pointer;
        transition: all 0.2s ease;
        border: 1px solid transparent;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
    }

    .btn-primary {
        background: #3b82f6;
        color: white;
        border-color: #3b82f6;
    }

    .btn-primary:hover {
        background: #2563eb;
        border-color: #2563eb;
        transform: translateY(-1px);
    }

    .btn-outline {
        background: transparent;
        color: #3b82f6;
        border-color: #3b82f6;
    }

    .btn-outline:hover {
        background: #3b82f6;
        color: white;
        transform: translateY(-1px);
    }

    /* List View Variant */
    :global(.list-view) .university-card {
        flex-direction: row;
        height: auto;
        max-height: none;
    }

    :global(.list-view) .card-image {
        width: 200px;
        height: 140px;
        flex-shrink: 0;
    }

    :global(.list-view) .card-content {
        padding: 16px 20px;
    }

    :global(.list-view) .info-grid {
        grid-template-columns: 1fr 1fr;
    }

    :global(.list-view) .card-actions {
        flex-direction: column;
        width: 120px;
        flex-shrink: 0;
        margin-left: auto;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .card-image {
            height: 160px;
        }

        .card-content {
            padding: 16px;
            gap: 12px;
        }

        .university-name {
            font-size: 16px;
        }

        .info-item {
            padding: 10px;
        }

        .card-actions {
            flex-direction: column;
            gap: 8px;
        }

        .btn {
            padding: 12px 16px;
        }

        /* List view on mobile should stack */
        :global(.list-view) .university-card {
            flex-direction: column;
        }

        :global(.list-view) .card-image {
            width: 100%;
            height: 160px;
        }

        :global(.list-view) .card-actions {
            width: 100%;
            flex-direction: row;
        }
    }

    @media (max-width: 480px) {
        .card-content {
            padding: 12px;
        }

        .specialization-tags {
            gap: 4px;
        }

        .specialization-tag {
            font-size: 10px;
            padding: 3px 6px;
        }
    }

    /* Accessibility */
    @media (prefers-reduced-motion: reduce) {
        .university-card,
        .card-image img,
        .btn,
        .favorite-btn {
            transition: none;
        }

        .university-card:hover {
            transform: none;
        }

        .university-card:hover .card-image img {
            transform: none;
        }
    }

    /* Focus styles */
    .university-name a:focus,
    .btn:focus,
    .favorite-btn:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
        border-radius: 4px;
    }

    /* Loading state */
    .university-card.loading {
        opacity: 0.7;
        pointer-events: none;
    }

    .university-card.loading .card-content::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.8),
            transparent
        );
        animation: shimmer 1.5s infinite;
    }

    @keyframes shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
</style>
